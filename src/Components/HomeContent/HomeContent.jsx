import React, {useContext} from 'react';
import { HeaderContext } from '../../Contexts/HeaderContext.jsx';
import Header from '../Header/Header.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';

const HomeContent = () => {
  const { content } = useContext(HeaderContext);

  return (
    <div>
      <Header />
      {content === 'dashboard' ? <Dashboard />: null}
    </div>
  )
}

export default HomeContent
