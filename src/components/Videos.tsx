import { useState } from "react";
import "./Videos.scss";
import Trailer from "../../public/assets/vids/trailer.mp4";
import Project from "../../public/assets/vids/gamer2.mp4";

export const Videos = () => {
  const [video, setVideo] = useState<string>("trailer"); // Type the state as a string

  // Handle toggling
  const toggleVideo = (videoType: "trailer" | "project") => {
    setVideo(videoType);
  };

  return (
    <div id="videos" className="videoContainer">
      {/* Video player */}
      <video controls key={video}>
        {" "}
        {/* Key forces re-render on source change */}
        {/* Conditionally render the video based on the state */}
        {video === "trailer" ? (
          <source src={Trailer} type="video/mp4" />
        ) : (
          <source src={Project} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>{" "}
      {/* Buttons to toggle between videos */}
      <div className="videoToggles">
        <button onClick={() => toggleVideo("trailer")}>Trailer</button>
        <button onClick={() => toggleVideo("project")}>Project Video</button>
      </div>
    </div>
  );
};
