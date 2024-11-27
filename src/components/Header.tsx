import "./Header.scss";
import Poster from "../assets/poster.png";

export const Header = () => {
  return (
    <>
      {" "}
      <div className="mainTitle" id="home">
        <p>IAT 445 Immersive Environments</p>
        <h1>Project Title</h1>
      </div>
      <div className="header">
        {/* Left side */}
        <div className="left">
          <div className="overview">
            <p className="subtitle">Overview</p>
            <p>
              wait a minute chat is this real edgin cuz im a sigma lil bro lock
              in got me rizzmaxing oh my gyatt so opium youre my mod meow for
              some nitro sussy impostor caught you ventin what the sigma i just
              my edging streak this time ill edge you you you like were
              mewmaxxing you you you you you anita maxwin edge edge edge edge
            </p>
          </div>
          <div id="team">
            <ul>
              <li className="subtitle">Team Members</li>
              <li>Samantha Chung - Project Manager & Developer</li>
              <li>Megan Yeung - Environment Designer & 3D Modeler</li>
              <li>Pocholo Andres - Lead Developer</li>
              <li>Rabab Altarazi - Environment Designer & 3D Modeler</li>
            </ul>
          </div>
          <div id="links">
            <ul>
              <li className="subtitle">Links</li>
              <li>
                <a href="https://github.com/sleepsim/445-VR-Project">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side */}
        <div className="right">
          <img className="poster" src={Poster} alt="Game Poster" />
        </div>
      </div>
    </>
  );
};
