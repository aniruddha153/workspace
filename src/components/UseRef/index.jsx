import { Outlet, Link } from "react-router";

const UseRef = () => {
  const childComponents = ["modal-click-outside", "stopwatch"];

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

export default UseRef;
