import React from 'react';
import Link from 'next/link';

import { SigninButton } from '../SigninButton';

import styles from './styles.module.scss';


export const Header: React.FC = () => {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.headerrContent}>
              <img src="/images/logo.svg" alt="Logo ig.news" />
              <nav>
                  <Link href="/">
                    <a className={styles.active} >Home</a>
                  </Link>
                  <Link href="/posts" prefetch>
                    <a>Posts</a>
                  </Link>
              </nav>
              <SigninButton/>
          </div>
      </header>
  );
}
