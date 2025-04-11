import * as React from "react";
import { formatTime } from "./utils";

const StopWatch = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const ref = React.useRef(null);

  const handleClick = () => {
    if (running === false) {
      ref.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setRunning(true);
    } else {
      window.clearInterval(ref.current);
      setRunning(false);
    }
  };

  return (
    <main>
      <h1>{formatTime(seconds)}</h1>
      <button
        style={{ background: running === true ? "var(--red)" : "var(--green)" }}
        onClick={handleClick}
      >
        {running === true ? "Stop" : "Start"}
      </button>
    </main>
  );
};

export default StopWatch;
