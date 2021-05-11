import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    handleOpenNewTransactionNewModal: () => void;
}

export function Header({handleOpenNewTransactionNewModal}: HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="vt money" />
                <button type="button" onClick={handleOpenNewTransactionNewModal}>Nova transação</button>
                
            </Content>
        </Container>
    )
}
