import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("modal"));
};

export default Modal;
