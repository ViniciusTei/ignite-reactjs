import { useState } from 'react';
import Modal from 'react-modal';
import {GlobalStyle} from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { makeServer } from './services/server';

makeServer()

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionNewModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionNewModal() {
        setIsNewTransactionModalOpen(false)
    }
  return (
    <>
      <Header handleOpenNewTransactionNewModal={handleOpenNewTransactionNewModal}/>
      <Dashboard/>
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionNewModal}
      >
          <h2>Nova transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}

