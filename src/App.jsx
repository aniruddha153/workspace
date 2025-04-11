import "./styles.css";

export default function App() {
  const links = [
    {
      id: 1,
      name: "Test",
    },
    {
      id: 2,
      name: "ReactRender",
    },
    {
      id: 3,
      name: "UseRef",
    },
    {
      id: 4,
      name: "Memoize",
    },
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>This is Aniruddha.</h2>

      {links.map((item) => {
        return (
          <p key={item.id}>
            <a href={`/components/${item.name.toLowerCase()}`}>{item.name}</a>
          </p>
        );
      })}
    </div>
  );
}
