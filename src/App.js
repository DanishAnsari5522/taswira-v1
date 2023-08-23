import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation';
import Index from './components/Package/Index'
import ContactUs from './components/ContactUS'
import Navbar from './components/Navbar'
import Carosal from './components/Carosal/Index'
import StickyNavbar from './components/Navbar/Test';
import { ThemeProvider } from "@material-tailwind/react";
import Home from './components/Home/Index';
// import Example from './components/Navbar/Test2';
import Nav from './navigation/Test';
import About from './components/About/Index';
import Contact from './components/Contact/Index';
import Gallery from './components/Gallery/Index';
import { FaFacebookF } from 'react-icons/fa';
import Footer from './components/Footer/Index';

function App() {
  const auth = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/about" exact><About /></Route>
        <Route path="/gallery" exact> <Gallery /></Route>
        <Route path="/contact" exact> <Contact /></Route>
        <div className='hii'>
          <div className='contactIcon' onClick={() => { alert("hii") }}>
            <FaFacebookF style={{ fontSize: '25px' }} />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;