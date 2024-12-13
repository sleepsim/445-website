import { useState } from "react";
import "./Videos.scss";
import Trailer from "../../public/assets/vids/trailer.mp4";
// import Project from "../../public/assets/vids/gamer2.mp4";

export const Videos = () => {
  const [video, setVideo] = useState<string>("trailer"); // Type the state as a string

  // Handle toggling
  const toggleVideo = (videoType: "trailer" | "project") => {
    setVideo(videoType);
  };

  return (
    <div id="videos" className="videoContainer">
      {/* Conditionally render the video player or embedded video */}
      {video === "trailer" ? (
        <video controls key={video}>
          <source src={Trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="embedContainer">
          <iframe
            src="https://1sfu-my.sharepoint.com/personal/mpy_sfu_ca/_layouts/15/embed.aspx?UniqueId=8cac1855-ccc6-4040-94d7-2327300b02db&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="1024"
            height="768"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title="FinalVideo_V1.mp4"
          ></iframe>
        </div>
      )}

      {/* Buttons to toggle between videos */}
      <div className="videoToggles">
        <button onClick={() => toggleVideo("trailer")}>Trailer</button>
        <button onClick={() => toggleVideo("project")}>Project Video</button>
      </div>
    </div>
  );
};
