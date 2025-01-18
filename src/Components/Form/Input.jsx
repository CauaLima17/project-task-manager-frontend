import React from 'react';
import styles from './Input.module.css';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  onBlur,
  placeholder,
  error
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input 
        className={styles.input} 
        type={type} 
        name={id} 
        id={id} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        placeholder={placeholder}
      />
      {error ? <p className={styles.pError}>{error}</p> : null}
    </div>
  )
}

export default Input
