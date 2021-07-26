import React from "react";
// import Option from "../Option/Option";
import FileUpload from "../FileUpload/FileUpload";
import DropDown from "../DropDown/DropDown";
import BooleanBox from "../Booleanbox/BooleanBox";
import InputText from "../InputText/InputText";
import DOB from "../DOB/DOB";
import CheckBox from "../CheckBox/CheckBox";
import gfm from "remark-gfm";
import { addQue } from "../../features/que/QueSlice";
import "../../index.css";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { Button } from "../Utils/Button";

import { isvalidDate, isValidInput } from "./validators";
import Markdown from "react-markdown";
import { useStore } from "../../store.js";
import { setQueAction } from "../../features/que/QueAction";
function RenderInput(props) {
  if (props.type === "dob") {
    return <DOB {...props} />;
  }
  if (props.type === "text") {
    return <InputText {...props} />;
  }
  if (props.type === "dropdown") {
    return <DropDown {...props} />;
  }
  if (props.type === "boolean") {
    return <BooleanBox {...props} />;
  }
  if (props.type === "checkbox") {
    return <CheckBox {...props} />;
  }
  if (props.type === "file") {
    return <FileUpload {...props} />;
  }

  return null;
}

function RenderQuestion({ sn, markdown }) {
  return (
    <div className="question-markdown-wrapper">
      <div className="col markdown-content">
        <Markdown
          remarkPlugins={[[gfm, { singleTilde: false }]]}
          children={markdown}
          remarkPlugins={[gfm]}
          escapetml={false}
        />
      </div>
    </div>
  );
}
const quearr = [];
function Question({
  sn,
  data,
  WriteToStore,
  prevResponse = "",
  onNext,
  isFinal,
  onSubmit,
}) {
  const [que, setque] = useState([]);

  const questionRef = useRef();
  const errorDisplay = useRef();
  const [valid, setValid] = useState(false);
  const isRequired = data.required || false;
  const iid = data.id;
  const dispatch = useDispatch();
  function _writeToStore(value) {
    //validate before write to store
    const isRequired = data.required;
    WriteToStore({
      id: data.id,
      response: value,
    });
    //update setque state
    setque(value);
    quearr.push({ id: data.id, value });

    console.log(quearr, "valvalval");

    if (data.type === "checkbox") {
      onNext();
    }
    if (data.type === "text") {
      if (!isRequired || isValidInput(value)) {
        setValid(true);
        hideError();
      } else {
        setValid(false);
        showError();
      }
    }
    if (data.type === "boolean") {
      onNext();
    }
    if (data.type === "dob") {
      //check validity and vibrate the banana

      if (isvalidDate(value)) {
        setValid(true);
        hideError();
      } else {
        setValid(false);
        showError();
      }
      if (!isRequired) {
        setValid(true);
      }
    }

    if (data.type === "file") {
      if (value !== null) {
        setValid(true);
      }
    }
    if (data.type === "dropdown") {
      if (isValidInput(value)) {
        // setTimeout(onNext,3000);
        // setValid(true);
        onNext();
      }
    }
  }
  function showError() {
    const err_el = errorDisplay.current;
    if (err_el) {
      err_el.classList.add("show");
    }
    onError();
  }

  function hideError() {
    const err_el = errorDisplay.current;
    if (err_el) {
      err_el.classList.remove("show");
    }
  }
  function onError() {
    const el = questionRef.current;
    if (el) {
      if (el.classList.contains("error-vibrate")) {
        return;
      }
      el.classList.add("error-vibrate");
      setTimeout(() => {
        el.classList.remove("error-vibrate");
      }, 2000);
    }
  }

  //  console.log(data);

  return (
    <div className="question-wrapper" ref={questionRef}>
      <div className="question-main">
        <div className="q-col sncol">
          <div className={`col sn-wrapper ${isRequired ? "m-req" : ""}`}>
            <div className="sn">{sn}</div>
            <div className="q-icon">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="q-col">
          <RenderQuestion sn={sn} markdown={data.question.markdown || ""} />
          <RenderInput
            type={data.type}
            options={data.options}
            value={prevResponse}
            onChange={_writeToStore}
          />
          <div className="error-display" ref={errorDisplay}>
            <div className="err-content">Invalid input</div>
          </div>
          <div className="question-actions">
            {/* {isFinal && (!isRequired || valid) ? (
              <Button label="Submit" onClick={onSubmit} />
            ) : (
              !isFinal &&
              (!isRequired || valid) && (
                <Button label={data.label || "Next"} onClick={onNext} />
              )
            )} */}
            {isFinal && (!isRequired || valid)
              ? ""
              : !isFinal &&
                (!isRequired || valid) && (
                  <Button label={data.label || "Next"} onClick={onNext} />
                )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
