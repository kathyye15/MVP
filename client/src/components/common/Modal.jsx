import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen }) {
  return createPortal(
    isOpen && children,
    document.getElementById('modal-portal')
  );
}