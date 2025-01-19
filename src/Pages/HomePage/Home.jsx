import React from 'react';
import { HeaderContextProvider } from '../../Contexts/HeaderContext.jsx'
import SideBar from '../../Components/SideBar/SideBar.jsx';
import styles from './HomePage.module.css';
import HomeContent from '../../Components/HomeContent/HomeContent.jsx';

const Home = () => {
  return (
    <div className={styles.container}>
      <HeaderContextProvider>
        <SideBar />
        <HomeContent />
      </HeaderContextProvider>
    </div>
  )
}

export default Home
