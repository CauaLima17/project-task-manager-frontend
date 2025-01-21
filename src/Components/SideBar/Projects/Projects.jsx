import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import useToken from '../../../Hooks/useToken.js';
import useFetch from '../../../Hooks/useFetch.js';
import Loader from '../../Loader/Loader.jsx';
import Card from '../../Card/Card.jsx';

const Projects = () => {
  const { token, getToken } = useToken();
  const { data, error, loading, fetchData } = useFetch();
  const [fetchStatus, setFetchStatus] = useState();

  useEffect(() => {
    getToken('userToken')
  }, []);

  useEffect(() => {
    if (token) {
      fetchData({ url: `http://localhost:5000/projetos/${token.user_id}` })
    }
  }, [token])

  useEffect(() => {
    if (error) {
      console.log(error)
      setFetchStatus('Erro ao carregar os projetos do usuário.')
    }

    if (data) {
      if (data.error) {
        setFetchStatus(data.error)
      } else if (data.length === 0) {
        setFetchStatus('Não há tarefas registradas na sua conta.')
      }
    }
  }, [data, error])
  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {fetchStatus && <h1>{fetchStatus}</h1>}
      {data && data.map((project) => (
          <Card key={project._id}
          onwer={token.username}
          title={project._nome}
          status={project._status}
          priority={project._prioridade}
          createdAt='12/01/2025'
          description={project._descricao}
        />)) 
      }
    </div>
  )
}

export default Projects
