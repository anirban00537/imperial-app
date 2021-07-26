import React, { useRef } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Question from "./components/Question/Question";
import questions from "./data/questions";
import FullScreen from "./components/Fullscreen/FullScreen";
import { useEffect, useState } from "react";
import { useStore } from "./store";
import { useDispatch } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FaAngleUp, FaAngleDown, FaInfoCircle } from "react-icons/fa";
import { isvalidDate, isValidInput } from "./components/Question/validators";
import { createPortal } from "react-dom";

import axios from "axios";
import SnackBar from "./components/Utils/SnackBar";
import { setQueAction } from "./features/que/QueAction";
import form_nav_logo from "./icons/IC.png";
import ProgressBar from "@ramonak/react-progress-bar";
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function Form({ onSubmitSuccess }) {
  const [question, setQuestion] = useState(0);
  const [responses, dispatch] = useStore();
  const [direction, setDirection] = useState("up");
  const [prevResponse, setPrevResponse] = useState("");
  const [uploadProgress, setUploadProgess] = useState(0);
  const [loader, setLoader] = useState(false);
  const [maxNumber, setmaxNumber] = useState(null);
  const [showSnake, setShowSnake] = useState(false);
  const [percent, setpercent] = useState(0);
  const [spinner, setspinner] = useState(false);
  const gestureView = useRef();

  function writeToStore(payload) {
    dispatch({
      type: "SET_RESPONSE",
      payload,
    });
  }
  const findThebigNumber = () => {
    const max = Math.max(...Object.keys(responses).map((k) => parseInt(k, 10)));
    console.log(responses, "nice");
    console.log(max, "nice");
    setmaxNumber(max);
  };
  useEffect(() => {
    const delayed = debounce(handleScroll, 200);
    window.addEventListener("mousewheel", delayed);
    return () => {
      window.removeEventListener("mousewheel", delayed);
    };
  });
  function handleScroll(e) {
    if (e.deltaY > 0) {
      nextQuestion();
    } else {
      prevQuestion();
    }
  }

  useEffect(() => {
    let touchstartY = 0;
    let touchendY = 0;
    const gestureZone = document.querySelector(".app-form");
    gestureZone.addEventListener("touchstart", touchStart, false);

    gestureZone.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
      touchstartY = event.changedTouches[0].screenY;
    }
    function touchEnd(event) {
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
    }
    function handleGesture() {
      if (Math.abs(touchstartY - touchendY) < 100) return;
      if (touchendY <= touchstartY) {
        console.log("Swiped up");
        nextQuestion();
      }

      if (touchendY >= touchstartY) {
        console.log("Swiped down");
        prevQuestion();
      }
    }
    return () => {
      gestureZone.removeEventListener("touchstart", touchStart);
      gestureZone.removeEventListener("touchend", touchEnd);
    };
  });
  const dispatches = useDispatch();

  const percentageOfWorkDone = (questoon, maxNumber) => {
    const ans = (questoon / 43) * 100;
    setpercent(Math.round(ans));
  };
  useEffect(() => {
    findThebigNumber();
    setPrevResponse(responses[questions[question].id]);

    percentageOfWorkDone(question);
    dispatches(setQueAction("hello"));
  }, [question, responses]);

  function nextQuestion() {
    setDirection("up");
    if (question < questions.length - 1) {
      setQuestion(question + 1);
    }
  }

  function prevQuestion() {
    setDirection("down");
    if (question > 0) {
      setQuestion(question - 1);
    }
  }
  const onSubmit = async () => {
    //find largest number key in object

    setspinner(true);
    console.log("nicenice", spinner);
    //validate and pull the question
    // for (let i = 0; i < questions.length; i++) {
    //   var _question = questions[i];
    //   var _value = responses[_question.id];

    //   if (_question.required) {
    //     if (_question.type === "dob" && !isvalidDate(_value)) {
    //       return setQuestion(i);
    //     } else if (_question.type === "file") {
    //       if (_value == null) {
    //         return setQuestion(i);
    //       }
    //     } else if (!isValidInput(_value)) {
    //       return setQuestion(i);
    //     }
    //   }
    //   if (_question.should_equals_to) {
    //     var _targetValue = responses[_question.should_equals_to] || "";
    //     if ((_value || "") !== _targetValue) {
    //       return setQuestion(i);
    //     }
    //   }
    // }
    //push the data to server
    const formData = new FormData();
    const newResponse = {};

    for (const key in responses) {
      const value = responses[key];
      const _question = questions.find((q) => q.id == key);

      if (_question.type === "file") {
        const data = new FormData();
        data.append("file", value);
        data.append("upload_preset", "imperial");
        data.append("cloud_name", "dmsqmh09j");

        await fetch("https://api.cloudinary.com/v1_1/dmsqmh09j/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            const value = data.url;
            // newResponse.push(key, value);
            newResponse[key] = value;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("keykey", key, value);
        // formData.append(key, value);
        newResponse[key] = value;
      }
    }

    // const config = {
    //   onUploadProgress: function (progressEvent) {
    //     var percentCompleted = Math.round(
    //       (progressEvent.loaded * 100) / progressEvent.total
    //     );
    //     console.log(percentCompleted);
    //     setUploadProgess(percentCompleted);
    //   },
    // };
    // setLoader(true);
    // axios
    //   .post("/form", formData, config)
    //   .then(({ data }) => {
    //     console.log(data);
    //     setUploadProgess(0);
    //     onSubmitSuccess();
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     setUploadProgess(0);
    //     setLoader(false);
    //     setShowSnake(true);
    //   });

    console.log(newResponse, "daslm");
    axios
      .post("https://imperial-front.herokuapp.com/app", newResponse)
      .then((res) => {
        setLoader(true);
        setspinner(false);
      })
      .catch((err) => {});
  };

  return (
    <div className="app-form">
      {showSnake &&
        createPortal(
          <SnackBar
            message="something went wrong,try again!"
            dismiss={() => setShowSnake(false)}
          />,
          document.getElementById("portal")
        )}
      <Loader show={loader} spinner={spinner} progress={uploadProgress} />
      <div className="form-nav">
        <div className="nav-logo">
          <img src={form_nav_logo} alt="imperial capital" />
        </div>
      </div>
      <FullScreen ref={gestureView}>
        <SwitchTransition>
          <CSSTransition
            appear
            in={true}
            key={questions[question].id + ""}
            timeout={400}
            classNames={`slide-${direction}`}
            unmountOnExit
          >
            <Question
              data={questions[question]}
              key={questions[question].id + ""}
              WriteToStore={writeToStore}
              onNext={nextQuestion}
              sn={question + 1}
              isFinal={question === questions.length - 1}
              onSubmit={onSubmit}
              prevResponse={prevResponse}
            />
          </CSSTransition>
        </SwitchTransition>
      </FullScreen>
      {maxNumber >= 58 ? (
        <div className="app-controls">
          <button className="app-action submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="progressApp app-action ">
          <ProgressBar
            bgColor="#103550"
            className="mypro"
            completed={percent}
          />
        </div>
      )}
    </div>
  );
}

function Loader({ show, progress = 0, spinner }) {
  const history = useHistory();
  if (show) {
    history.push("/thanks");
  }

  if (spinner) {
    console.log("this spinner is true");
  }
  if (!spinner) return null;

  return (
    <div className="loader-container">
      <div className="loader-card">
        <div className="loading-indicators">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="loading-progress">
          {/* <div className="text">
            <span>{100}</span>%
          </div> */}
        </div>
        <div className="loading-text">
          {spinner ? (
            <div>
              <b>Please wait,while we record your response!</b>
            </div>
          ) : (
            // <b>please wait,while we recording your response!</b>
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
