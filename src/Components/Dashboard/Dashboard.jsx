import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';
import Card from '../Card/Card';
import useToken from '../../Hooks/useToken';

const Dashboard = () => {
  const { token, getToken } = useToken('userToken')

  useEffect(() => {
    getToken('userToken')
  }, [])

  return (
    <div className={styles.container}>
      {token &&
        <Card 
          title='Total de Projetos'
          url={`http://localhost:5000/projetos/${token.user_id}`}
        /> 
      }
      {token &&
        <Card 
          title='Total de Tarefas'
          url={`http://localhost:5000/tarefas`}
        />
      }
      {token &&
        <Card 
          title='Total de Colaborações'
          url={`http://localhost:5000/tarefas`}
        />
      }
    </div>
  )
}

export default Dashboard
