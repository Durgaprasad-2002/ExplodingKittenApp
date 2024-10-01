import React, { memo } from "react";

function Modal({ message, showState, HandleShowState }) {
  return (
    <>
      <div className={`Modal-body ${!showState && "hide-modal"} `}>
        <div className="modal-main-conatiner">
          <div className="modal-info-desc">
            <p>{message}</p>
          </div>

          <div className="Buttons-container">
            <button
              className="modal-btn"
              onClick={() => HandleShowState((prev) => false)}
            >
              Continue Playing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Modal);
