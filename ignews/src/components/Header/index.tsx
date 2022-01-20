import React from 'react';


import { SigninButton } from '../SigninButton';

import styles from './styles.module.scss';
import { ActiveLink } from './ActiveLink';


export const Header: React.FC = () => {
    
  return (
      <header className={styles.headerContainer}>
          <div className={styles.headerrContent}>
              <img src="/images/logo.svg" alt="Logo ig.news" />
              <nav>
                  <ActiveLink href="/" activeClassName={styles.active}>
                    <a>Home</a>
                  </ActiveLink>
                  <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a>Posts</a>
                  </ActiveLink>
              </nav>
              <SigninButton/>
          </div>
      </header>
  );
}
