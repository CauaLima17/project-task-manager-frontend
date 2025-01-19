import React, { useEffect, useState } from 'react';
import styles from './Tasks.module.css';
import useFetch from '../../../Hooks/useFetch.js';
import useToken from '../../../Hooks/useToken.js';
import Loader from '../../Loader/Loader.jsx';
import Card from '../../Card/Card.jsx';

const Tasks = () => {
  const { token, getToken } = useToken();
  const { data, error, loading, fetchData } = useFetch();
  const [fetchStatus, setFetchStatus] = useState('');

  useEffect(() => {
    getToken('userToken');
  }, []);

  useEffect(() => {
    if (token) {
      fetchData({ url: `http://localhost:5000/tarefas/user/${token.user_id}` });
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      setFetchStatus('Erro ao carregar as tarefas do usuário.')
    }

    if (data) {
      data.error ? setFetchStatus(data.error) : null
    }
  }, [data, error])

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {fetchStatus && <h1>{fetchStatus}</h1>}
      {data && data.map((task) => (
        <Card key={task._id}
        onwer={token.username}
        title={task._titulo}
        status={task._status}
        priority={task._prioridade}
        createdAt='12/01/2025'
        description={task._descricao}
      />
      ))};
    </div>
  )
}

export default Tasks
