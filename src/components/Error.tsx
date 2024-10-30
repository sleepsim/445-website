import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h1>Page not found!</h1>
      <p>r u lost? perhaps? here's a button to go home :)</p>

      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  );
};
