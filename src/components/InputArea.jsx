import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.valueChange} type="text" value={props.inputValue} />
      <button onClick={props.addItems}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
