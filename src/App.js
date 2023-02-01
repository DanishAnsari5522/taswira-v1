import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
import Home from './components/Home'
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Logout from './components/Logout'
import Wristlet from './components/Categori/Wristlet';
import Double_Layered from './components/Categori/Double_Layered'

function App() {
  const auth = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Route path="/" exact><Home /></Route>
        <Route path="/addproduct"><AddProduct /></Route>
        <Route path="/Organza"><Wristlet /></Route>
        <Route path="/Printed"><Wristlet /></Route>
        <Route path="/Wristlets"><Wristlet /></Route>
        <Route path="/doublelayered"><Double_Layered /></Route>

        {auth ? <Route path="/Logout"><Logout /></Route> : <Route path="/Login"><Login /></Route>}
        <Redirect to="/" />
      </BrowserRouter>
    </div>
  )
}

export default App;