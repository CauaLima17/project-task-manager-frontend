import React from 'react';
import { HeaderContextProvider } from '../../Contexts/HeaderContext.jsx'
import SideBar from '../../Components/SideBar/SideBar.jsx';
import Header from '../../Components/Header/Header.jsx'
import styles from './HomePage.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <HeaderContextProvider>
        <SideBar />
        <Header />
      </HeaderContextProvider>
    </div>
  )
}

export default Home
