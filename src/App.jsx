import React from 'react';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import Home from './Pages/HomePage/Home.jsx';
import ProtecteRouter from './Components/ProtectedRouters/ProtecteRouter.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />}/>
        <Route path='/home' element={<ProtecteRouter element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
