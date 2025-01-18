import React, { useContext, useState, useEffect } from 'react';
import drop from '../../assets/icons/Drop.svg'
import { jwtDecode } from "jwt-decode";
import { HeaderContext } from '../../Contexts/HeaderContext.jsx';
import styles from './Header.module.css';

const Header = () => {
  const { content } = useContext(HeaderContext);
  const [userData, setUserData] = useState();
  const [dropDown, setDropDown] = useState(false);

  function handleLogout() {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  }

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserData(decodedToken);
    }
  }, []);

  return (
    <header className={styles.header}>
      <h2>{content}</h2>

      <div className={styles.account}>
        <div className={styles.details}>
          <div>{userData && userData.username[0].toUpperCase()}</div>

          <div>
              <h3>{userData ? userData.username : 'Carregando...'}</h3>
              <p>{userData ? userData.user_email : '...'}</p>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.logout}>Logout</button>
      </div>
    </header>
  )
}

export default Header
