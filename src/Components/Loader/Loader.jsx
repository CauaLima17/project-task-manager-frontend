import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dot_spinner}>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
      </div>
    </div>
  )
}

export default Loader
