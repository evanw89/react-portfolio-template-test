import React from "react";

const NextViewBtn = ({
  position,
  label,
  onClick = () => {},
  className = ""
}) => {
  return (
    <div
      className={`NextViewBtn ${className} ${
        position ? position : ""
      } absolute pointer p1 pb2 card`}
      onClick={onClick}
    >
      {label ? <div className="NextViewBtnLabel">{label}</div> : null}
      <button className="h1 outline-none border-none bg-none pointer">
        <i className="fas fa-chevron-down" />
      </button>
    </div>
  );
};

export default NextViewBtn;
