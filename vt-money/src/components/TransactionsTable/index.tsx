import React from 'react';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
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
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className="withdraw">R$10.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>10/01/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className="deposit">R$10.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>10/01/2021</td>
                </tr>
            </tbody>
        </table>
    </Container>
    );
}