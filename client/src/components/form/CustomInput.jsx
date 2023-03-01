import React, { useState, useEffect } from 'react';

export default function CustomInput({ edit, name, value, type }) {
  const [val, setVal] = useState(value);
  const [isEditable, setIsEditable] = useState(edit);

  const onChange = (ev) => {
    setVal(ev.target.value);
  }
  const confirmEdit = (ev) => {
    ev.preventDefault();
    setIsEditable(false);
  }

  const editableInput = (
    <input type={type || "text"} name={name} value={val ?? "placeholder"} onBlur={confirmEdit} onChange={onChange}/>
  );
  const staticInput = (
    <input className='input--static' type={type || "text"} name={name} onClick={() => setIsEditable(true)} value={val ?? "placeholder"} readOnly/>
  );
  return isEditable ? editableInput : staticInput;
}