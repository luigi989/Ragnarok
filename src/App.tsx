import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from './components/infoPage';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className='bg-bgPrimary'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':name' element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;