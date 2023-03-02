import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import ApplicationList from './applicationList';
import TopComponent from './topComponent';
import Modal from './common/Modal.jsx';
import ModalContext from './contexts/modalContext.js';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(
    () => {
      axios
        .get('/applications')
        .then(res => setRows(res.data))
        .catch(err => { throw err; })
    }, []
  );

  const useModal = (content) => {
    if (!modalIsOpen) {
      setModalContent(content);
      setModalIsOpen(true);
    } else {
      console.error('Cannot open new modal while another modal is currently open, close the current modal before trying to open a new one')
    }
  }

  const dismissModal = () => {
    setModalIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{useModal: useModal, dismissModal: dismissModal}}>
      <Modal isOpen={modalIsOpen}>
        {modalContent}
      </Modal>
      <div>
        <h2>Job Board</h2>
        <TopComponent />
        <ApplicationList rows={rows}/>
      </div>
    </ModalContext.Provider>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);