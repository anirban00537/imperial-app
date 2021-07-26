import React from "react";
// import "./button.css";
import "../../index.css";

import { FaArrowRight } from "react-icons/fa";

export function Button({ label, onClick, showExtras = false }) {
  return (
    <div className="btn-wrapper">
      <div className="btn-content-wrapper" onClick={onClick}>
        <div className="btn-content">{label}</div>
      </div>
      {showExtras && (
        <div className="extras">
          <div className="btn-extra">
            <div className="btn-extra-icon">
              <FaArrowRight />
            </div>
            <div className="btn-extra-text">Enter to Continue</div>
          </div>
        </div>
      )}
    </div>
  );
}
