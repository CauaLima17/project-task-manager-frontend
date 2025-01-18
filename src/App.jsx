import React from 'react';
import AuthPage from './Pages/AuthPage.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
