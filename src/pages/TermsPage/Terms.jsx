import React from "react";
import "../../index.css";
import { useState } from "react";
import Requirements from "./Requirements";

const ic_img = require("../../icons/IC.png");

function Terms({ onProceed }) {
  const [accepted, setAccepted] = useState(false);
  const [dialog, setDailog] = useState(true);
  function onChange(e) {
    // console.log(e.target.checked);
    setAccepted(e.target.checked);
  }
  if (dialog) {
    return <Requirements onContinue={() => setDailog(false)} />;
  }
  function next() {
    if (accepted) {
      onProceed();
    }
  }
  return (
    <div className="terms-container">
      <div className="flex-fill">
        <div className="t-header">
          <div className="t-header-item">
            <img src="./IC.png" alt="header" />
          </div>
        </div>
        <div className="terms-wrapper">
          <div className="terms-title">
            Please Accept Our Terms and Conditions
          </div>
          <div className="terms">
            <div>
              <b>Imperial Capital LLC WEB SITE User Agreement</b>
            </div>
            <div className="para">
              The following Terms and Conditions apply to the use of this web
              site.Please review them carefully regarding your use of the
              imperialcapital.com web site. "Imperial Capital" refers to
              Imperial Capital, LLC and each of its affiliates, directors,
              officers or employees.
            </div>
            <div className="para">
              This agreement governs use of the imperialcapital.co.com site.It
              is separate from your customer account agreement and any other
              agreement relating to any account you may have through Imperial
              Capital.The customer agreements and other agreements to which you
              may be a party set forth additional obligations you have as a
              Imperial Capital account holder. You understand that no
              information on this web site is to be construed as an offer to
              sell or solicit an offer to buy a particular security.Imperial
              Capital does not provide, nor does it intend to provide, legal,
              tax, accounting or investment advice through this web site.In any
              event, no offer to sell or solicitation of an offer to buy a
              security, product or service is made by any Imperial Capital
              entity or employee if such entity, individual, security, product
              or service is not appropriately registered in the jurisdiction in
              which such registration would be required.
            </div>
            <div className="para">
              You understand that certain information on this web site,
              including information made available from third parties, is
              provided "as is." Although Imperial Capital provides and / or
              makes available information from sources it believes to be
              reliable, Imperial Capital does not warrant the accuracy,
              timeliness or completeness of the information provided, nor does
              it warrant the merchantability or fitness for a particular use, or
              make any other express or implied warranty, with regard to such
              information.Should I leave the imperialcapital.com site by way of
              a link and view content not provided by Imperial Capital, I do so
              at my own risk.Imperial Capital makes no representations
              whatsoever about any other web site which you may access through
              this one.When you access a non - Imperial Capital web site, please
              understand that it is independent from Imperial Capital, and that
              Imperial Capital has no control over the content on that web
              site.In addition, a link to a non - Imperial Capital web site does
              not mean that Imperial Capital endorses or accepts any
              responsibility for the content, or the use, of such web site.It is
              up to you to take precautions to ensure that whatever you select
              for your use is free of such items as viruses, worms, trojan
              horses and other items of a destructive nature.
            </div>
            <div className="para">
              You understand that Imperial Capital shall not be liable for
              damage or loss resulting, directly or indirectly, from any
              failure, delay or interruption of this web site due to a negligent
              act of Imperial Capital or due to any act, event or occurrence
              beyond the control of Imperial Capital
            </div>
            <div className="para caps">
              IN NO EVENT WILL IMPERIAL CAPITAL BE LIABLE TO ANY PARTY FOR ANY
              DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL DAMAGES FOR ANY
              USE OF THIS WEB SITE, OR ON ANY OTHER HYPERLINKED WEB SITE,
              INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS
              INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR INFORMATION
              HANDLING SYSTEM OR OTHERWISE, EVEN IF WE ARE EXPRESSLY ADVISED OF
              THE POSSIBILITY OF SUCH DAMAGES.
            </div>
            <div className="para">
              This web site is the property of Imperial Capital.Certain
              information is provided by Imperial Capital and third parties who
              have certain legal rights with respect to such information.You
              agree not to use this information for any illegal purpose.If you
              choose to download any information, you agree not to further copy
              such information or redistribute such information in any
              manner.�2008 Imperial Capital, LLC.All rights reserved.Member SIPC
              and FINRA.
            </div>
          </div>
        </div>
        <div className="t-check-container">
          <input
            type="checkbox"
            id="check"
            name="accept"
            value={accepted}
            onChange={onChange}
          />
          <label htmlFor="check"> i agree to above terms and conditions</label>
        </div>
        <div className="t-actions">
          <div
            className={`t-action ${accepted ? "enable" : ""}`}
            onClick={next}
          >
            <div className="t-action-content">Proceed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
