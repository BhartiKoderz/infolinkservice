
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Training from './sections/AboutUS/Training';
import Navbar from './layout/Navbar';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/about' element={<Aboutpage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;