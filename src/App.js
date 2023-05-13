import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
import Home from './components/Home'
function App() {
  const auth = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        {/* {auth ? <Route path="/Logout"><Logout /></Route> : <Route path="/Login"><Login /></Route>} */}
        {/* <Redirect to="/" /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;