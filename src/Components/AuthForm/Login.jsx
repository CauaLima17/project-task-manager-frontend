import React, { useEffect, useState } from 'react';
import Input from '../Form/Input.jsx'
import Loader from '../Loader/Loader.jsx';
import styles from './Auth.module.css';
import useFetch from '../../Hooks/useFetch.js';
import useForm from '../../Hooks/useForm.js'

const Login = () => {
  const { data, error, loading, fetchData } = useFetch();
  const [fetchStatus, setFetchStatus] = useState(null);
  const email = useForm('email');
  const password = useForm('password');

  function handleLogin(e){
    e.preventDefault()
    const options = {
      url: 'http://localhost:5000/auth/login',
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    }
    
    if (email.validate() && password.validate()){
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
        localStorage.setItem('userToken', data.token);
        window.location.href = 'http://localhost:5173/home'
      }
    }
  }, [data, error])

  return (
    <form onSubmit={handleLogin} style={{position: 'relative', height: '100%'}}>
      <h2>Fazer Login</h2>
      <Input id='email' label='Endereço de Email' type='email' {...email} />
      <Input id='password' label='Sua senha' type='password' {...password} />

      <button className={styles.btn}>Login</button>

      {loading && <Loader />}
      {fetchStatus && <p className={data.error || error ? styles.pError : styles.pSuccess}>{fetchStatus}</p>}
    </form>
  )
}

export default Login
