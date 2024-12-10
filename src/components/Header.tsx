import "./Header.scss";
import Poster from "../../public/assets/poster.png";

export const Header = () => {
  return (
    <>
      {" "}
      <div className="mainTitle" id="home">
        <p>IAT 445 Immersive Environments</p>
        <h1>Bearthday Blues</h1>
      </div>
      <div className="header">
        {/* Left side */}
        <div className="left">
          <div className="overview">
            <p className="subtitle">Overview</p>
            <p>Step into their world!</p>
            <p>
              Bearthday Blues is a game that puts you in the shoes of a child
              and their toys. Experience both perspectives as the child
              controlling the environment and as a toy experiencing the changes
              in the environment as your own reality. Traverse through a dynamic
              environment filled with toys and make your way through obstacles
              by manipulating objects
            </p>
          </div>
          <div id="team">
            <ul>
              <li className="subtitle">Team Members</li>
              <li>Samantha Chung: Project Manager, Developer</li>
              <li>Pocholo Andres: Main Game Developer</li>
              <li>Megan Yeung: 3D Modeller, Designer</li>
              <li>Rabab Altarazi: 3D Modeller, Designer</li>
            </ul>
          </div>
          <div id="links">
            <ul>
              <li className="subtitle">Links</li>
              <li>
                <a href="https://github.com/sleepsim/445-VR-Project">GitHub</a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1juiS8QSPpHxv3FQuL6kv7OwGe1TLXJkwfYngVnLGAFY/edit?tab=t.0">
                  VRDD.pdf
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1RwxVTWjl66oucsV6RifPPBW-4M6pjRFf5nBhir_U9M0/edit?gid=0#gid=0">
                  Storyboard
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1x7N8JiVoNKUofSi5DwNY9YOsGt8TdY8vaTxdlyzDX5s/edit?tab=t.0">
                  User Study
                </a>
              </li>
              <li>
                <a href="https://1sfu-my.sharepoint.com/:f:/g/personal/mpy_sfu_ca/EgXYdnb6TjpAseIkTyhoVbEBTL31yOSkxPVzpQ4ZC4lAnw?e=if5nXhR">
                  Final Deliverables
                </a>
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
