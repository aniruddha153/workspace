import { Outlet, Link } from "react-router";

const Memoize = () => {
  const childComponents = [
    "counter",
    "pokemon-list",
    "wave-with-memo",
    "wave-without-memo",
  ];

  return (
    <div>
      <h1>Memoize</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="">Test</Link> |{" "}
        {childComponents.map((item, index) => {
          return (
            <span key={index}>
              <Link to={`${item}`}>{item}</Link> |{" "}
            </span>
          );
        })}
      </nav>

      <Outlet />

      <div style={{ marginTop: "3rem" }}>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Memoize;
