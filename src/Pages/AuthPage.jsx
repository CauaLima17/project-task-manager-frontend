import React, { useState } from 'react';
import styles from '../Styles/index.module.css';
import Login from '../Components/AuthForm/Login.jsx';
import Register from '../Components/AuthForm/Register.jsx';
import logo from '../assets/icons/Logo.svg'

const AuthPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });
  const [login, setLogin] = useState(true);

  function handleFormChange({ target }) {
    setForm({...form, [target.id]: target.value});
  };

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
        <div className={styles.form} onSubmit={(e) => e.preventDefault()}>
              {
                login ? 
                <Login form={form} setForm={handleFormChange} />
                :
                <Register form={form} setForm={handleFormChange} />
              }
        </div>
      </div>
    </main>
  )
}

export default AuthPage
