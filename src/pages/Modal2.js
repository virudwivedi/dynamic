import React from "react";
import AddEdit from "./AddEdit2";
import "./Modal1.css"

function Modal2({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          ADD USER
        </div>
        <div className="body">
         <AddEdit/>
        </div>
        
      </div>
    </div>
  );
}

export default Modal2;