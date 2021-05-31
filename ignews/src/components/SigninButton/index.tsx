import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SigninButton() {
    const [session] = useSession()
    
    return session ? (
        <button 
            type="button" 
            className={styles.siginButton} 
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            Vinicius Teixeira
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.siginButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sigin with github
        </button>
    )
}
