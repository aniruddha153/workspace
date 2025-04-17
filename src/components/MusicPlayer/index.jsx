import { useEffect, useRef, useState } from "react";
import "./style.css"; // CSS import

export default function Test() {
  const musicRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    musicRef.current = new window.Music();

    return () => {
      musicRef.current?.stop();
    };
  }, []);

  const toggleMusic = () => {
    if (!musicRef.current) return;

    if (isPlaying) {
      musicRef.current.stop();
    } else {
      musicRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={`music-player ${isPlaying ? "playing" : "paused"}`}>
      <button
        onClick={toggleMusic}
        className={`music-button ${isPlaying ? "btn-stop" : "btn-play"}`}
      >
        {isPlaying ? "Pause" : "Play"} TEst
      </button>
    </div>
  );
}
