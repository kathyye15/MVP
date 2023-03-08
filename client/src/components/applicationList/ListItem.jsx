import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import modalContext from '../contexts/modalContext.js';
import RowsContext from '../contexts/rowsContext.js';
import Form from '../form';

export default function ListItem({ item, index, pgID }) {
  const { useModal, dismissModal } = useContext(modalContext);
  const { setRows } = useContext(RowsContext);
  const formComponent = <Form content={item} onDismiss={dismissModal} setRows={setRows} button='Update' id={item.id}/>;
  const deleteApp = (e, id) => {
    e.preventDefault();
    axios.delete(`/applications/${id}`)
      .then(() => axios.get('applications'))
      .then((response) => {
        setRows([...response.data])
      })
      .catch((err) => console.log(err))
  }


  return (
    <li style={{display: 'flex'}}>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <div className="row-number">{index + 1}</div>
        <div className="company">{item.name}</div>
        <div className="job-title">{item.job_title}</div>
        <div className="status">{item.status}</div>
        <button className="edit" onClick={() => useModal(formComponent)} ><i className="fa-solid fa-pen-to-square" /></button>
        <button className="delete" onClick={(e)=> {deleteApp(e, item.id)}}><i className="fa-regular fa-trash-can"/></button>
      </div>
    </li>
  );
}