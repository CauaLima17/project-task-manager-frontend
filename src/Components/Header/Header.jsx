import React, { useContext } from 'react';
import { HeaderContext } from '../../Contexts/HeaderContext.jsx';
import styles from './Header.module.css';

const Header = () => {
  const { content } = useContext(HeaderContext)

  return (
    <header className={styles.header}>
      <h2>{content}</h2>

      <div>
        <div>C</div>
        <div>
          <h3>Nome de usuário</h3>
          <p>example@example.com</p>
        </div>
      </div>
    </header>
  )
}

export default Header
