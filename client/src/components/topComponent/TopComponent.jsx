import React, { useState, useEffect, useContext } from 'react';
import modalContext from '../contexts/modalContext.js';
import Form from '../form';

export default function TopComponent() {
  const { modal, dismiss } = useContext(modalContext);
  const formComponent = <Form edit={true} onDismiss={dismiss}/>;

  return (
    <div className="add">
      <button onClick={() => modal(formComponent)}>Add new application here...</button>
    </div>
  );
}