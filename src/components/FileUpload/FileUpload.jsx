import React from "react";
import "../../index.css";
import MaterialIcon from "material-icons-react";
import { useRef, useState, useEffect } from "react";
import { BiCloudUpload, BiDownArrow } from "react-icons/bi";
import { createPortal } from "react-dom";
import SnackBar from "../Utils/SnackBar";

function ImagePreview({ file }) {
  if (!file) {
    return null;
  }
  if (/image/.test(file.type)) {
    return (
      <img
        className="image-preview"
        src={URL.createObjectURL(file)}
        alt="file preview"
      />
    );
  }
  return (
    <div className="image-preview fallback">
      <MaterialIcon icon="folder" size={48} />
    </div>
  );
}

function FileUpload({ value = null, onChange }) {
  const fileInput = useRef();
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const [showSnack, setShowSnack] = useState(false);

  useEffect(() => {
    onChange && onChange(file);
  }, [file]);
  function _onChange(e) {
    const file = e.target.files[0];
    const size = Math.round(file.size / 1024);
    if (size > 2048) {
      setShowSnack(true);
      return;
    }
    setFile(file);
    onChange && onChange(file);
  }
  function onDragOver(e) {
    e.preventDefault();
    setDragging(true);
  }
  function onDrop(ev) {
    setDragging(false);
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    if (ev.dataTransfer.files) {
      const file = ev.dataTransfer.files[0] || null;
      if (file) {
        const size = Math.round(file.size / 1024);
        if (size > 2048) {
          setShowSnack(true);
          return;
        }
      }
      setFile(file);
    }
  }

  return (
    <div className="fileupload-wrapper">
      {showSnack &&
        createPortal(
          <SnackBar
            message="file size should not exceed 2MB"
            dismiss={() => setShowSnack(false)}
          />,
          document.getElementById("portal")
        )}
      {!file && (
        <div
          className={`fileupload-card ${dragging ? "dragging" : ""}`}
          onClick={() => fileInput.current.click()}
          onDragOver={onDragOver}
          onDragLeave={() => setDragging(false)}
          onDragEnd={() => setDragging(false)}
          onDragExit={() => setDragging(false)}
          onDrop={onDrop}
        >
          {!dragging ? (
            <div className="fu-content">
              <div className="fu-icon upload">
                <BiCloudUpload size={48} />
              </div>
              <div className="fu-label">Choose File or Drag here</div>
              <div className="fu-note">Size limit:2MB</div>
            </div>
          ) : (
            <div className="fu-content draggin-hint">
              <div className="fu-icon upload">
                <BiDownArrow size={48} />
              </div>
              <div className="fu-label">Drop Here</div>
            </div>
          )}
          <input type="file" hidden ref={fileInput} onChange={_onChange} />
        </div>
      )}
      {file && (
        <div className="fileupload-preview">
          <div className="file-preview-card">
            <div className="file-render">
              <ImagePreview file={file} />
            </div>
            <div className="file-title">
              <span>{file.name}</span>
            </div>
            <div className="fu-icon remove" onClick={() => setFile(null)}>
              <MaterialIcon icon="cancel" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
