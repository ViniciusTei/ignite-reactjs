import React from 'react';
import { useTransaction } from '../../contexts/TransactionContext';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
    const {transactions} = useTransaction()
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