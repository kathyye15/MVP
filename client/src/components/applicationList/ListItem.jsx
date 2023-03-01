import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import Form from '../form';

export default function ListItem({ item }) {
  const { modal, dismiss } = useContext(modalContext);
  const formComponent = <Form content={item} onDismiss={dismiss}/>;
  
  return (
    <li style={{display: 'flex'}} onClick={() => modal(formComponent)}>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <div className="company">{item.name}</div>
        <div className="job-title">{item.job_title}</div>
        <div className="status">{item.status}</div>
        <button className="notes">Notes button</button>
      </div>
    </li>
  );
}