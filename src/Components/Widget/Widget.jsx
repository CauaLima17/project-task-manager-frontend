import React, { useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import useFetch from '../../Hooks/useFetch.js';
import styles from './Widget.module.css';

const Widget = ({
  title,
  url
}) => {
  const { data, error, loading, fetchData } = useFetch()

  useEffect(() => {
    fetchData({ url: url })
  }, [fetchData, url])
  
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {loading && <Loader />}
      {error ? <p>Erro ao carregar</p> : data && <p>{data.length}</p>}
    </div>
  )
}

export default Widget
