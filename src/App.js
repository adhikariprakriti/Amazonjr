import React,{useState,useEffect} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {CartContext} from './StateProvider';
import Register from './components/Register/Register';

import Checkout from './components/Checkout/Checkout';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {auth} from './firebase';


function App() {

  //const [cart,setCart,show,setShow,user,setUser]=useContext(CartContext);
  const [user,setUser]=useState('');


  useEffect(()=>{
    const unsuscribe=auth.onAuthStateChanged((authUser)=>{
       if(authUser){
         //user is logged in
         console.log(authUser);
         setUser(authUser);
 
              }else{
         //user has logged out
         setUser(null);
       }
    })
 
    return ()=>{
      //perform some cleanup actions
      unsuscribe();
    }
 },[user]);
   
 

  return (
    <BrowserRouter>
    <div className="app">
        <Navbar user={user}/>

        <Switch>
            <Route path='/' component={Home} exact>
              <Home user={user}/>
              </Route>
            <Route path='/Login'>
                <Login />
            </Route>
            <Route path='/Checkout' component={Checkout}/>
            <Route path='/Register' >
              <Register/>
              </Route>


        </Switch>
    </div>
    </BrowserRouter>


  );
}

export default App;
