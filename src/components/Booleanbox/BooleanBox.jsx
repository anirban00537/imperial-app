import React from "react";
import Option from "../Option/Option";
import { useState } from "react";

function Booleanbox({ value = "", onChange, l_0 = "Yes", l_1 = "No" }) {
  const [val, setVal] = useState(value);

  function _onSelect(label) {
    setVal(label);
    onChange && onChange(label);
  }
  return (
    <div className="boolean-box-wrapper">
      <Option
        key_label="Y"
        label={l_0}
        onSelect={_onSelect}
        checked={val === l_0}
      />
      <Option
        key_label="N"
        label={l_1}
        onSelect={_onSelect}
        checked={val === l_1}
      />
    </div>
  );
}
export default Booleanbox;
