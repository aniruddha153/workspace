import * as React from "react";

export default function Counter() {
  console.count("Rendering Counter");
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.count("click");
    setCount(count);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>🤨</button>
      <div>
        <a href="/">Home</a>
      </div>
    </React.Fragment>
  );
}
