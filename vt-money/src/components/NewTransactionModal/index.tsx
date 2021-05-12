import { useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';
import closeImg from '../../assets/close.svg';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {

    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <button type="button" className="react-modal-close" onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
            <h2>Cadastrar transação</h2>
            <input type="text" placeholder="Titulo" />
            <input type="number" placeholder="Valor" />
            <input type="text" placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
        </Container>
        
    </Modal>
  );
}
