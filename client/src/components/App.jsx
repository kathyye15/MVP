import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import ApplicationList from './applicationList';
import TopComponent from './topComponent';
import Modal from './common/Modal.jsx';
import ModalContext from './contexts/modalContext.js';
import RowsContext from './contexts/rowsContext.js';

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
    <ModalContext.Provider value={{useModal, dismissModal}}>
      <RowsContext.Provider value={{rows, setRows}}>
        <Modal isOpen={modalIsOpen}>
          {modalContent}
        </Modal>
        <div>
          <div className="header">
            <h2>Job Board</h2>
          </div>
          <TopComponent setRows={setRows} rows={rows}/>
          <ApplicationList rows={rows}/>
        </div>
      </RowsContext.Provider>
    </ModalContext.Provider>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);