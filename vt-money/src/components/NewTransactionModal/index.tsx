import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, TransactionTypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { useTransaction } from '../../contexts/TransactionContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const {createNewTransaction} = useTransaction();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            amount: value,
            category,
            type,
        }

        await createNewTransaction(data)
        
        onRequestClose()
        setTitle('')
        setValue(0)
        setCategory('')
        setType('')
    }

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
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
            <input 
                type="text" 
                placeholder="Titulo" 
                onChange={event => setTitle(event.target.value)}/>
            <input 
                type="number" 
                placeholder="Valor" 
                onChange={event => setValue(Number(event.target.value))}/>

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
            <input 
                type="text" 
                placeholder="Categoria" 
                onChange={event => setCategory(event.target.value)}/>
            <button type="submit">Cadastrar</button>
        </Container>
        
    </Modal>
  );
}
