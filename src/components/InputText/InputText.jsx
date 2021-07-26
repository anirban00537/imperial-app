import React from "react";
import "../../index.css";

import { useState } from "react";

function InputText({ value = "", onChange }) {
  const [text, setText] = useState(value);

  function _onChange(e) {
    const val = e.target.value;
    setText(val);
    onChange && onChange(val);
  }

  return (
    <div className="input-text-wrapper">
      <input
        type="text"
        className="input"
        onChange={_onChange}
        value={text}
        placeholder="Type your answer here..."
      />
    </div>
  );
}

export default InputText;
