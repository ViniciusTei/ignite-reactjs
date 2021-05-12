import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

interface TransactionProps {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    created_at: string;
}

export const TransactionsTable: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => {
                console.log(response.data)
                setTransactions(response.data.transactions)
            })
    }, [])
    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((value) => (
                    <tr key={value.id}>
                        <td>{value.title}</td>
                        <td className={value.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(value.amount)}
                        </td>
                        <td>{value.category}</td>
                        <td>{new Date(value.created_at).toLocaleDateString('pt-BR')}</td>
                    </tr>))}
            </tbody>
        </table>
    </Container>
    );
}