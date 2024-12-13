import "./Videos.scss";
import Trailer from "../../public/assets/vids/trailer.mp4";
export const Videos = () => {
  return (
    <div id="videos" className="videoContainer">
      <video controls>
        {" "}
        <source src={Trailer} type="video/mp4" />{" "}
      </video>
      {/* Buttons to toggle between videos */}
      <div className="videoToggles">
        <button>Trailer</button>
        <button>
          {" "}
          <a
            target="_blank"
            href="https://1sfu-my.sharepoint.com/:v:/g/personal/mpy_sfu_ca/EVUYrIzGzEBAlNcjJzALAtsBOrorWDobnEKfKFzM_7Ynqg?e=1fmX05&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D"
          >
            Project Video
          </a>
        </button>
      </div>
    </div>
  );
};
