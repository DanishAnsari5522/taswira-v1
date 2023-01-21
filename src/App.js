import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
import Home from './components/Home'
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        {/* <Route path="/services"><Service /></Route> */}
        <Route path="/addproduct"><AddProduct /></Route>

      </BrowserRouter>
    </div>
  ) 
}

export default App;