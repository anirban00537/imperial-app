import React from "react";
import "../../index.css";

function Requirements({ onContinue }) {
  return (
    <div className="req-container">
      <div className="dialog-container">
        <div className="d-title">Requirements To Open an Account</div>
        <div className="dt-content">
          <div className="d-para">
            Dear Customer,
            <br />
            Please have the below documents ready in JPEG, PDF, PNG or GIF
            formats before you start.The images should each not exceed{" "}
            <b>5 MB.</b>
          </div>
          <div className="req-section">
            <div className="req sec-title">Identification Documents</div>
            <ul className="req-sec-items">
              <li>Passport Size Photo</li>
              <li>Signature Image</li>
              <li>National ID / Valid Passport</li>
              <li>Tin Certificate</li>
            </ul>
          </div>
          <div className="req-section">
            <div className="req sec-title">Introduction to CBA</div>
            <ul className="req-sec-items">
              <li>
                Letter of introduction from Employer
                <span className="or">OR</span>
              </li>
              <li>A referral from an existing CBA account Holder </li>
            </ul>
          </div>
          <div className="req-section">
            <div className="req sec-title">Proof of Residence(Employed)</div>
            <ul className="req-sec-items">
              <li>
                Utility Bill (not more than 3 months old)
                <span className="or">OR</span>
              </li>
              <li>
                Employment Contract <span className="or">OR</span>
              </li>
              <li>Letter from employer showing residence</li>
            </ul>
          </div>
          <div className="req-section">
            <div className="req sec-title">
              Proof of Residence(Self-Employed)
            </div>
            <ul className="req-sec-items">
              <li>
                Utility Bill (not more than 3 months old)
                <span className="or">OR</span>
              </li>
              <li>Tenancy Agreement</li>
            </ul>
          </div>
          <div className="req-section">
            <div className="req sec-title">Proof of Income (Employed)</div>
            <ul className="req-sec-items">
              <li>
                Letter of introduction from Employer
                <span className="or">OR</span>
              </li>
              <li>
                3 months bank statements where income is credited
                <span className="or">OR</span>
              </li>
              <li>Copy of current work contract</li>
            </ul>
          </div>
        </div>
        <div className="d-actions">
          <div className="d-action" onClick={onContinue}>
            <div className="d-content">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
