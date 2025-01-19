import React, {useContext} from 'react';
import { HeaderContext } from '../../Contexts/HeaderContext.jsx';
import styles from './HomeContent.module.css';
import Header from '../Header/Header.jsx';
import Dashboard from '../SideBar/Dashboard/Dashboard.jsx';
import Tasks from '../SideBar/Tasks/Tasks.jsx';

const HomeContent = () => {
  const { content } = useContext(HeaderContext);

  return (
    <div className={styles.container}>
      <Header />
      {content === 'dashboard' ? <Dashboard />: null}
      {content === 'tarefas' ? <Tasks />: null}
    </div>
  )
}

export default HomeContent
