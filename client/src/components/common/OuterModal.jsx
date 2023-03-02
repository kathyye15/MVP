import React, { useState, useEffect, useContext } from 'react';
import ModalContext from '../contexts/modalContext.js';

export default function OuterModal({ children }) {
  const { dismissModal } = useContext(ModalContext);

  const handleOuterClick = (ev) => {
    dismissModal();
  };

  const handleInnerClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <div className="outer-modal" onClick={handleOuterClick}>
      <div className="inner-modal" onClick={handleInnerClick}>
        <button className="dismiss" onClick={dismissModal}>X</button>
        {children}
      </div>
    </div>
  );
}