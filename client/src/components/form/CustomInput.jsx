import React, { useState, useEffect } from 'react';

export default function CustomInput({ name, value, type }) {
  const [val, setVal] = useState(value);
  const onChange = (ev) => {
    setVal(ev.target.value);
  };

  return (
    <input className='input--dynamic' type={type || "text"} name={name} value={val || ""} onChange={onChange} />
  );
};