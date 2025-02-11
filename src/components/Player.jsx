import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import "./Player.css";

export default function Player({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="player-container">
      <div className="controls">
      <div><h2 className="song-title">{song}</h2></div>
        <button className="control-button">
          <SkipBack size={24} />
        </button>
        <button
          className="play-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="control-button">
          <SkipForward size={24} />
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}
