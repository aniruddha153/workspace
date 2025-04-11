import * as React from "react";

const ChildComponent = React.memo(({ children, onClick }) => {
  console.count("Child component is rendering");

  return <button onClick={onClick}>{children}</button>;
});

const MemoizedChildComponent = ChildComponent;

export default function ParentComponent() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // const handleIncrementCount = React.useMemo(() => {
  //   return () => {
  //     setCount((count) => count + 1);
  //   };
  // }, []);

  const handleIncrementCount = React.useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Current time: {time}</p>
      <p>Count: {count}</p>
      <MemoizedChildComponent onClick={handleIncrementCount}>
        Increment Count
      </MemoizedChildComponent>
    </div>
  );
}
