import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Reviews from './Components/Reviews/Reviews';

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path='/' element= {<LandingPage />}></Route>
          <Route path='/about' element= {<AboutUs />}></Route>
          <Route path='/services' element= {<Services />}></Route>
          <Route path='/reviews' element= {<Reviews />}></Route>
          <Route path='/contact' element= {<Contact />}></Route>
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
