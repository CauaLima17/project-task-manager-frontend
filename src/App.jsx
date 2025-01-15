import React from 'react';
import Index from './Pages/Index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
