import React from 'react';
import Input from './Input.jsx';
import styles from './Auth.module.css';

const Register = ({
  setForm,
  form
}) => {
  return (
    <div className={styles.container}>
      <h2>Criar Conta</h2>
      <Input id='username' label='Nome de usuário' value={form.username} onChange={setForm}/>

      <Input id='email' label='Endereço de Email' type='email' value={form.email} onChange={setForm}/>

      <Input id='password' label='Sua senha' type='password' value={form.password} onChange={setForm}/>

      <Input id='confirmedPassword' label='Repita a senha' type='password' value={form.confirmedPassword} onChange={setForm}/>

      <button className={styles.btn}>Cadastrar</button>
    </div>
  )
}

export default Register
