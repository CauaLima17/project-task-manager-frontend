import React, { useContext } from 'react'
import styles from './SideBar.module.css'
import { HeaderContext } from '../../Contexts/HeaderContext.jsx'

const SideBar = () => {
  const { setContent } = useContext(HeaderContext);

  return (
    <aside className={styles.aside}>
      <h1 className={styles.logo}>TASK<span>FLOW</span></h1>

      <nav aria-label='Navegação Primária'>
        <button className={styles.btn_project}>CRIAR UM PROJETO</button>

        <ul className={styles.menu}>
          <li><button onClick={() => setContent('dashboard')}>DASHBOARD</button></li>
          <li><button onClick={() => setContent('projetos')}>PROJETOS</button></li>
          <li><button onClick={() => setContent('tarefas')}>TAREFAS</button></li>
          <li><button onClick={() => setContent('colaboradores')}>COLABORADORES</button></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
