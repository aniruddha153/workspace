import { Outlet, Link } from "react-router";

const ManageEffects = () => {
  const childComponents = ["pokemon-carousel"];

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

export default ManageEffects;
