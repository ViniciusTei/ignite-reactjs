
import {GlobalStyle} from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { makeServer } from './services/server';

makeServer()

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

