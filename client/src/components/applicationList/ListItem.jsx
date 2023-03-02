import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import Form from '../form';

export default function ListItem({ item }) {
  const { useModal, dismissModal } = useContext(modalContext);
  const formComponent = <Form content={item} onDismiss={dismissModal}/>;
  
  return (
    <li style={{display: 'flex'}} onClick={() => useModal(formComponent)}>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <div className="company">{item.name}</div>
        <div className="job-title">{item.job_title}</div>
        <div className="status">{item.status}</div>
        <button className="notes">Notes button</button>
      </div>
    </li>
  );
}