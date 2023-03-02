import React, { useState, useEffect } from 'react';
import OuterModal from './OuterModal.jsx';
import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen }) {
  return createPortal(
    isOpen && <OuterModal>{children}</OuterModal>,
    document.getElementById('modal-portal')
  );
}