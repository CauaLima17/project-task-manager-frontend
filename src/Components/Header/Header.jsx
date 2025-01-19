import React, { useContext, useState, useEffect } from 'react';
import drop from '../../assets/icons/Drop.svg'
import { jwtDecode } from "jwt-decode";
import { HeaderContext } from '../../Contexts/HeaderContext.jsx';
import styles from './Header.module.css';
import useToken from '../../Hooks/useToken.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { content } = useContext(HeaderContext);
  const { token, getToken, removeToken } = useToken();
  const navigate = useNavigate()

  function handleLogout() {
    removeToken('userToken');
    navigate('/');
  }

  useEffect(() => {
    getToken('userToken')
  }, [])

  return (
    <header className={styles.header}>
      <h2>{content}</h2>

      <div className={styles.account}>
        <div className={styles.details}>
          <div>{token && token.username[0].toUpperCase()}</div>

          <div>
              <h3>{token ? token.username : 'Carregando...'}</h3>
              <p>{token ? token.user_email : '...'}</p>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.logout}>Logout</button>
      </div>
    </header>
  )
}

export default Header
