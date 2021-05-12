import { useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, TransactionTypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [type, setType] = useState('');

    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <button 
            type="button" 
            className="react-modal-close" 
            onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
            <h2>Cadastrar transação</h2>
            <input type="text" placeholder="Titulo" />
            <input type="number" placeholder="Valor" />

            <TransactionTypeContainer>
                <TransactionTypeButton 
                    type="button" 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green">
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entradas</span>
                </TransactionTypeButton>
                <TransactionTypeButton 
                    type="button" 
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red">
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saidas</span>
                </TransactionTypeButton>
            </TransactionTypeContainer>
            <input type="text" placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
        </Container>
        
    </Modal>
  );
}
