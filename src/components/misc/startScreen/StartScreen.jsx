import React from "react";
import "../../../index.css";

function StartScreen({ onStart }) {
  return (
    <div className="sscreen-wrapper">
      <div class="hero">
        <img src="./hero_start.df4aefaa.jpeg" alt="hero" />
      </div>
      <div className="mytagline">
        Welcome to a new world of possibilities. Open a personal bank account
        online in quick and easy steps with zero paperwork. With Imperial
        Capital, It Can Be.
      </div>

      <div className="ss-actions">
        <div className="ss-action start" onClick={onStart}>
          <div className="ss-action-content">Lets Start</div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
