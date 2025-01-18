import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/index.module.css';
import Login from '../Components/AuthForm/Login.jsx';
import Register from '../Components/AuthForm/Register.jsx';
import logo from '../assets/icons/Logo.svg'

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <main className={styles.container}>
      <div className={styles.gridContainer}>
        <section className={styles.section}>
              <span><img src={logo} alt="Task Manager Logo" /></span>
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
