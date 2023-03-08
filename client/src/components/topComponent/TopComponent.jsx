import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import Form from '../form';

export default function TopComponent({ setRows, rows }) {
  const { useModal, dismissModal } = useContext(modalContext);

  const formComponent = <Form onDismiss={dismissModal} setRows={setRows} rows={rows} button='Submit'/>;
  const openModalForm = () => useModal(formComponent);

  return (
    <div className="add">
      <button className="addNewApp" onClick={openModalForm}>Add new application here...</button>
    </div>
  );
}