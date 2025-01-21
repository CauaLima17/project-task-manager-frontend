import React, { useContext, useEffect, useState } from 'react'
import styles from './SideBar.module.css'
import { HeaderContext } from '../../Contexts/HeaderContext.jsx'

const SideBar = () => {
  const { content, setContent } = useContext(HeaderContext);
  const [hide, setHide] = useState(false)

  useEffect(() => {
    setHide(true)
  }, [content])

  return (
    <aside className={`${styles.aside} ${hide ? styles.hideAnimation : ''}`}>
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

      <button className={styles.hideBTN} onClick={() => setHide(!hide)}>{hide ? '>>>' : '<<<'}</button>
    </aside>
  )
}

export default SideBar
