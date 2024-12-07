import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#VRDD">VRDD</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Navbar };
