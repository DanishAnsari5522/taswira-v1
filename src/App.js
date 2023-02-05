import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
import Home from './components/Home'
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Logout from './components/Logout'
import Wristlet from './components/Categori/Wristlet';
import Double_Layered from './components/Categori/Double_Layered'
import Organza from './components/Categori/Organza';
import Printed from './components/Categori/Printed';
import Cart from './components/AddToCart/Cart'
import Test from './components/AddToCart/Test';
import UpdateProduct from './components/Categori/UpdateProduct';
import User from './components/User/User';
import GetCart from './components/AddToCart/GetCart';
function App() {
  const auth = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
          <Route path="/" exact><Home /></Route>
          <Route path="/addproduct" exact><AddProduct /></Route>
          <Route path="/Organza" exact><Organza /></Route>
          <Route path="/Printed" exact><Printed /></Route>
          <Route path="/Wristlets" exact><Wristlet /></Route>
          <Route path="/doublelayered" exact><Double_Layered /></Route>
          <Route path="/Cart" exact><GetCart /></Route>
          <Route path="/UpdateProduct/:id" exact><UpdateProduct /></Route>
          <Route path="/user" exact><User /></Route>


          {auth ? <Route path="/Logout"><Logout /></Route> : <Route path="/Login"><Login /></Route>}
          {/* <Redirect to="/" /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;