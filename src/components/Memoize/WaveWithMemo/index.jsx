import * as React from "react";
import HandWave from "./HandWave";

function Greeting({ name }) {
  const [index, setIndex] = React.useState(0);
  const [waveIndex, setWaveIndex] = React.useState(0);

  const greetings = ["Hello", "Hola", "Bonjour"];

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };

  /* 
    We can even refactor this a bit to not have that waveIndex dependency. 
    Instead of relying on the waveIndex state via closures, we can pass setWaveIndex a function and get access to it there.
  */
  const handleWaveClick = React.useMemo(() => {
    return () => {
      setWaveIndex((i) => {
        return i === 5 ? 0 : i + 1;
      });
    };
  }, []);

  const options = React.useMemo(() => {
    return {
      animate: true,
      tone: waveIndex,
    };
  }, [waveIndex]);

  return (
    <main>
      <h1>
        {greetings[index]}, {name}
      </h1>
      <button onClick={handleClick}>Next Greeting</button>
      <HandWave onClick={handleWaveClick} options={options} />
    </main>
  );
}

const WaveWithMemo = () => {
  return <Greeting name="Tyler" />;
};

export default WaveWithMemo;
