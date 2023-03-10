import React, { useState } from 'react';

export default function CustomInput({ name, value, type }) {
  const [val, setVal] = useState(value);
  const onChange = (ev) => {
    setVal(ev.target.value);
  };
  const required = <input className='input--dynamic' type={type || "text"} name={name} value={val || ""} onChange={onChange} required/>
  const optional = <textarea className='input--dynamic' type={type || "text"} name={name} value={val || ""} onChange={onChange} style={{height: "15rem"}}/>

  return name === 'notes' ? optional: required;
};