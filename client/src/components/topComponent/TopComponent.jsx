import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import Form from '../form';

export default function TopComponent() {
  const { useModal, dismissModal } = useContext(modalContext);

  const formComponent = <Form edit={true} onDismiss={dismissModal}/>;
  const openModalForm = () => useModal(formComponent);

  return (
    <div className="add">
      <button onClick={openModalForm}>Add new application here...</button>
    </div>
  );
}