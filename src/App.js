import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
// import Home from './component/pages/Home'
import Home from './components/Home'
import Service from './component/pages/Service'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/services"><Service /></Route>
      </BrowserRouter>
    </div>
  ) 
}

export default App;