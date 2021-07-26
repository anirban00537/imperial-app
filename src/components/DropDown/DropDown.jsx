import React from "react";
import "../../index.css";
import MaterialIcon from "material-icons-react";
import Option from "../Option/Option";
import { useState, useEffect, useRef } from "react";

function DropDown({ options = [], onChange, value = "" }) {
  const [input, setInput] = useState(value || "");
  const [input_focus, setInput_focus] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const blur_timeout = useRef();
  function _onSelect(selected_option) {
    setInput(selected_option);
    onChange && onChange(selected_option);
  }

  function hideOptions() {
    if (blur_timeout.current) {
      clearTimeout(blur_timeout.current);
    }
    blur_timeout.current = setTimeout(() => {
      setInput_focus(false);
    }, 700);
  }
  useEffect(() => {
    if (input.trim() === "") {
      setFiltered(options);
    } else {
      const regex = new RegExp(input.replace(/\\/g, ""), "i");
      const filtered = options.filter((option) => regex.test(option));
      setFiltered(filtered);
    }
  }, [input, options]);
  useEffect(() => {
    const el = document.querySelector(".dropdown-wrapper");
    function stopPropagation(e) {
      e.stopPropagation();
    }
    el.addEventListener("touchstart", stopPropagation, false);
    el.addEventListener("touchend", stopPropagation, false);
    return () => {
      el.removeEventListener("touchstart", stopPropagation);
      el.removeEventListener("touchend", stopPropagation);
    };
  });
  useEffect(() => {
    function stopPropagation(e) {
      e.stopPropagation();
    }
    const el = document.querySelector(".dropdown-wrapper");
    el.addEventListener("mousewheel", stopPropagation);
    return () => {
      el.removeEventListener("mousewheel", stopPropagation);
    };
  });
  return (
    <div className="dropdown-wrapper" onBlur={hideOptions}>
      <div className={`dd_input_wrapper ${input_focus ? "focus" : ""}`}>
        <div className="dd_input_container">
          <input
            type="text"
            className="dd_input"
            placeholder="Type or select an option"
            value={input}
            onChange={({ target }) => setInput(target.value)}
            onFocus={() => setInput_focus(true)}
          />
        </div>
        <div className="dd-input_action_button">
          {input.trim() !== "" && (
            <div className="dd_icon cancel" onClick={() => setInput("")}>
              <MaterialIcon icon="cancel" />
            </div>
          )}
          {input.trim() === "" && !input_focus && (
            <span className="dd_icon down">
              <MaterialIcon icon="keyboard_arrow_down" />
            </span>
          )}
          {input.trim() === "" && input_focus && (
            <span className="dd_icon up">
              <MaterialIcon icon="keyboard_arrow_up" />
            </span>
          )}
        </div>
      </div>
      {input_focus && filtered.length > 0 && (
        <div className="dd_options_wrapper">
          <div className="dd_options">
            {filtered.map((_option, i) => (
              <Option
                key={i}
                label={_option}
                key_support={false}
                onSelect={_onSelect}
              ></Option>
            ))}
          </div>
        </div>
      )}
      {filtered.length === 0 && (
        <div className="dd_warning no-suggestion">no suggestions available</div>
      )}
    </div>
  );
}

export default DropDown;
