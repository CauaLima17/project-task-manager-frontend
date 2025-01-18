import React, { useEffect, useState } from 'react';
import Input from '../Form/Input.jsx';
import Loader from '../Loader/Loader.jsx';
import styles from './Auth.module.css';
import useFetch from '../../Hooks/useFetch.js';
import useForm from '../../Hooks/useForm.js';

const Register = () => {
  const { data, error, loading, fetchData } = useFetch();
  const [fetchStatus, setFetchStatus] = useState(null);
  const username = useForm('username');
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');

  function handleRegister(e) {
    e.preventDefault();
    const options = {
      url: 'http://localhost:5000/users',
      method: 'POST',
      body: {
        username: username.value,
        email: email.value,
        password: password.value
      }
    }
    if (password.value !== confirmPassword.value) {
      setFetchStatus('As senhas precisam ser iguais.')
    } else if (username.validate() && email.validate() && password.validate() && confirmPassword.validate()) {
      fetchData(options)
    }
  }

  useEffect(() => {
    if (error) {
      setFetchStatus('Erro na conexão com o servidor. Tente novamente mais tarde.')
    }

    if (data) {
      if (data.error) {
        setFetchStatus(data.error)
      } else {
        setFetchStatus(data.message)
      }
    }
  }, [data, error])

  return (
    <form onSubmit={handleRegister} style={{position: 'relative', height: '100%'}}>
      <h2>Criar Conta</h2>

      <Input id='username' label='Nome de usuário' type='text' {...username} />
      <Input id='email' label='Endereço de Email' type='email' {...email} />
      <Input id='password' label='Sua senha' type='password' {...password} />
      <Input id='confirmedPassword' label='Repita a senha' type='password' {...confirmPassword} />

      <button className={styles.btn}>Cadastrar</button>

      {loading && <Loader />}
      {fetchStatus && <p className={data.error || error ? styles.pError : styles.pSuccess}>{fetchStatus}</p>}
    </form>
  )
}

export default Register
