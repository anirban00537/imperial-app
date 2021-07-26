import React, { useEffect } from "react";
import "../../index.css";

function SnackBar({ message = "Hello world!", dismiss, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      dismiss();
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="snackbar__container">
      <span className="snackbar__message">{message}</span>
      <span className="snackbar__dismiss" icon="fa-close" onClick={dismiss}>
        x
      </span>
    </div>
  );
}

export default SnackBar;
