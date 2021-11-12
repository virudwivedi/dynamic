import React from "react";
import AddEdit from "./AddEdit1";
import "./Modal1.css"

function Modal1({ setOpenModal }) {
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
          ADD TENANT
        </div>
        <div className="body">
         <AddEdit/>
        </div>
        
      </div>
    </div>
  );
}

export default Modal1;