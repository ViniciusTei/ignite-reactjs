import { useState } from 'react';

import {GlobalStyle} from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { makeServer } from './services/server';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionContext';

makeServer();


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
    <TransactionsProvider>
      <Header handleOpenNewTransactionNewModal={handleOpenNewTransactionNewModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionNewModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
      
    </>
  );
}

