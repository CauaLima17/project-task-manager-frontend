import React from 'react';
import styles from './Card.module.css'

const Card = ({
  onwer,
  title,
  description,
  status,
  priority,
  createdAt
}) => {
  return (
    <div className={styles.container}>
      <header>
        <h3>{title}</h3>
        {status && <p>{status}</p>}
      </header>
      <div className={styles.content}>
        <p><strong>Responsável:</strong> {onwer}</p>
        {description && <p><strong>Descrição:</strong> {description}</p>}
        {priority && <p><strong>Prioridade:</strong> {priority}</p>}
        <p><strong>Data de criação:</strong> {createdAt}</p>
      </div>
    </div>
  )
}

export default Card
