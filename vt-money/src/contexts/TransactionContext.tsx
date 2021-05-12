import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { api } from '../services/api';

interface TransactionProps {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    created_at: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextProps {
    transactions: TransactionProps[];
}

const TransactionsContext = createContext({} as TransactionContextProps)

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    
    useEffect(() => {
        api.get('transactions')
            .then(response => {
                console.log(response.data)
                setTransactions(response.data.transactions)
            })
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionsContext);
  
    if (!context) {
      throw new Error('useUser must be used within an UserContext');
    }
  
    return context;
}