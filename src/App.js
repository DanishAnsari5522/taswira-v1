import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation';
import Home from './components/Home/Index';
import About from './components/About/Index';
import Contact from './components/Contact/Index';
import Gallery from './components/Gallery/Index';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './components/Footer/Index';
import ViewMore from './components/Home/ViewMore/Index';


function App() {
  const send = () => {
    let url="https://wa.me/7355661108?text="
    +`I'm interested`
  
    window.open(url,'_blank').focus();
}
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/about" exact><About /></Route>
        <Route path="/gallery" exact> <Gallery /></Route>
        <Route path="/contact" exact> <Contact /></Route>
        <Route path="/taswira-v1" exact><Home /></Route>
        <Route path="/detail" exact><ViewMore /></Route>

        <div className='hii'>
          <div className='contactIcon' onClick={() => { send() }}>
            <FaWhatsapp style={{ fontSize: '30px' }} />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;