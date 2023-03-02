import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import RowsContext from '../contexts/rowsContext.js';
import Form from '../form';

export default function ListItem({ item, index }) {
  const { useModal, dismissModal } = useContext(modalContext);
  const { setRows } = useContext(RowsContext);
  const formComponent = <Form content={item} onDismiss={dismissModal} setRows={setRows} button='Update' id={item.id}/>;
  
  return (
    <li style={{display: 'flex'}} onClick={() => useModal(formComponent)}>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <div className="row-number">{item.id}</div>
        <div className="company">{item.name}</div>
        <div className="job-title">{item.job_title}</div>
        <div className="status">{item.status}</div>
        <button className="edit">Edit</button>
      </div>
    </li>
  );
}