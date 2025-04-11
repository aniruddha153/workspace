import { Outlet, Link } from "react-router";

const Memoize = () => {
  return (
    <div>
      <h1>Memoize</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="">Test</Link> | <Link to="counter">Counter</Link>
      </nav>

      <Outlet />

      <div style={{ marginTop: "3rem" }}>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Memoize;
