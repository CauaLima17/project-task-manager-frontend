import React from 'react';
import Input from './Input.jsx';
import styles from './Auth.module.css';

const Login = ({
  setForm,
  form
}) => {
  return (
    <div className={styles.container}>
      <h2>Fazer Login</h2>
      <Input id='email' label='Endereço de Email' type='email' value={form.email} onChange={setForm}/>

      <Input id='password' label='Sua senha' type='password' value={form.password} onChange={setForm}/>

      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Login
