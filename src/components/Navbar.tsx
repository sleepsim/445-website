import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">VRDD</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Navbar };
