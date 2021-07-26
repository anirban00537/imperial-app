import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";

const date = new Date();
function DOB({ value = "", onChange }) {
  const [day = "", month = "", year = ""] = value.trim().split("/");
  const [_day, setDay] = useState(day);
  const [_month, setMonth] = useState(month);
  const [_year, setYear] = useState(year);

  function _setDay({ target: { value } }) {
    const number = Number(value);
    if (isNaN(number) || number > 31) {
      return;
    }
    setDay(value);
  }
  function _setMonth({ target: { value } }) {
    const number = Number(value);
    if (isNaN(number) || number > 12) {
      return;
    }
    setMonth(value);
  }
  function _setYear({ target: { value } }) {
    const max_year = date.getFullYear();
    const number = Number(value);
    if (isNaN(number) || number > max_year) {
      return;
    }
    setYear(value);
  }

  useEffect(() => {
    onChange && onChange(`${_day}/${_month}/${_year}`);
  }, [_day, _month, _year]);

  return (
    <div className="dob-container">
      <div className="dob-wrapper">
        <div className="dob-row">
          <div className="dob-box">
            <input
              type="text"
              maxLength={2}
              className="dob-input day"
              placeholder="DD"
              onChange={_setDay}
              value={_day}
            />
          </div>
          <div className="dob-box">
            <input
              type="text"
              maxLength={2}
              className="dob-input month"
              placeholder="MM"
              onChange={_setMonth}
              value={_month}
            />
          </div>
          <div className="dob-box">
            <input
              type="text"
              className="dob-input year"
              placeholder="YYYY"
              maxLength={4}
              onChange={_setYear}
              value={_year}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DOB;
