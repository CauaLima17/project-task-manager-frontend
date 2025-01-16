import React, { useEffect, useState } from 'react';
import styles from '../Styles/index.module.css';
import Login from '../Components/Form/Login.jsx';
import Register from '../Components/Form/Register.jsx';
import logo from '../assets/icons/Logo.svg'
import useGet from '../Hooks/useGet.js';

const Index = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });
  const [login, setLogin] = useState(true);
  const {data, loading, error, fetchData} = useGet();

  function handleFormChange({ target }) {
    setForm({...form, [target.id]: target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchData('http://localhost:5000/tarefas')
  }

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
          <section className={styles.section}>
            <span><img src={logo} alt="Task Manager Logo" /></span>
            <div>
              <h1>Seja bem vindo!</h1>
              <p>{login ? 'Faça login' : 'Cadastre-se'} para continuar</p>
            </div>

            <button onClick={() => setLogin(!login)}>{login ? 'Criar Conta' : 'Fazer Login'} </button>
          </section>
          <form onSubmit={handleSubmit}>
            {
              login ? 
              <Login form={form} setForm={handleFormChange} />
              :
              <Register form={form} setForm={handleFormChange} />
            }
          </form>
      </div>
    </div>
  )
}

export default Index
