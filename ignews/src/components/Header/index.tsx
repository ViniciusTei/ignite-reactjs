import React from 'react';
import { SigninButton } from '../SigninButton';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.headerrContent}>
              <img src="/images/logo.svg" alt="Logo ig.news" />
              <nav>
                  <a className={styles.active} href="">Home</a>
                  <a href="">Posts</a>
              </nav>
              <SigninButton/>
          </div>
      </header>
  );
}
