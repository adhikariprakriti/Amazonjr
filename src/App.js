import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
        <Navbar/>

        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/Login' component={Login}/>
            <Route path='/Checkout' component={Checkout}/>

        </Switch>
    </div>
    </BrowserRouter>


  );
}

export default App;
