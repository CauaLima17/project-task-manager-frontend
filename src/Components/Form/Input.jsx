import React from 'react';
import styles from './Input.module.css';

const Input = ({
  id,
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} type="text" name={id} id={id} value={value} onChange={onChange} {...props}/>
    </div>
  )
}

export default Input
