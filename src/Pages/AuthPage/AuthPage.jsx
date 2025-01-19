import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.css';
import Login from '../../Components/AuthForm/Login.jsx';
import Register from '../../Components/AuthForm/Register.jsx';
import useToken from '../../Hooks/useToken.js';

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  const { getToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const decodedToken = getToken('userToken');

    if (decodedToken) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <main className={styles.container}>
      <div className={styles.gridContainer}>
        <section className={styles.section}>
              <h3 className={styles.logo}>TASK<span>FLOW</span></h3>
              <div>
                <h1>Seja bem vindo!</h1>
                <p>{login ? 'Faça login' : 'Cadastre-se'} para continuar</p>
              </div>

              <button onClick={() => setLogin(!login)}>{login ? 'Criar Conta' : 'Fazer Login'} </button>
        </section>
        <div className={styles.form} >
          {
            login ? 
            <Login />
            :
            <Register />
          }
        </div>
      </div>
    </main>
  )
}

export default AuthPage
