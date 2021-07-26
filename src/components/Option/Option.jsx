import React from "react";
import "../../index.css";
import { useRef } from "react";
// import MaterialIcon from "material-icons-react";

import { FaCheck } from "react-icons/fa";

function Option({ key_label, onSelect, label, checked = false }) {
  const _root = useRef();
  //animate and trigger prop function
  function animateSelect() {
    console.log(_root.current);
    _root.current.classList.add("blink");
    setTimeout(() => {
      onSelect && onSelect(label);
      _root.current && _root.current.classList.remove("blink");
    }, 700);
  }

  return (
    <div className="option-wrapper" onClick={() => animateSelect()} ref={_root}>
      <div className="option flex">
        {key_label && (
          <div className="option_key">
            <span className="option_key_label">{key_label}</span>
          </div>
        )}
        <div className="option_content">
          <span>{label}</span>
        </div>
        <div className="option_checked">
          <span className={`option_checked_icon ${!checked ? "hide" : ""}`}>
            {/* <MaterialIcon icon="checked" size={24}/> */}
            <FaCheck size={24} color="rgb(88, 100, 119)" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Option;
