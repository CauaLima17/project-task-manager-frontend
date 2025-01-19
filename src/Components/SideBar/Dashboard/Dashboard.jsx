import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';
import Widget from '../../Widget/Widget.jsx';
import useToken from '../../../Hooks/useToken.js';

const Dashboard = () => {
  const { token, getToken } = useToken('userToken')

  useEffect(() => {
    getToken('userToken')
  }, [])

  return (
    <div className={styles.container}>
      {token &&
        <Widget 
          title='Total de Projetos'
          url={`http://localhost:5000/projetos/${token.user_id}`}
        /> 
      }
      {token &&
        <Widget 
          title='Total de Tarefas'
          url={`http://localhost:5000/tarefas/user/${token.user_id}`}
        />
      }
      {token &&
        <Widget 
          title='Total de Colaborações'
          url={`http://localhost:5000/tarefas`}
        />
      }
    </div>
  )
}

export default Dashboard
