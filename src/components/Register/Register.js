import React,{useState} from 'react';
import classes from './Register.module.css';
import {Link ,useHistory} from "react-router-dom";
import {auth} from '../../firebase';


function Register() {

const history=useHistory();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [username,setUsername]=useState('');

const Registered=(event)=>{
  auth.createUserWithEmailAndPassword(email,password)
  .then((authUser)=>{
      console.log(authUser);
      history.push("/");
  })
  .catch((error)=>alert(error.message))

}


  return (
    <div className={classes.Register}>
    <Link to="/">
      <img 
        className={classes.Register__logo}
        src=" http://pngimg.com/uploads/amazon/amazon_PNG25.png"
         alt=""
        />
    </Link>

    <div className={classes.Register__container}>
        <h1>Register</h1>
        <form>
          <h5>Username</h5>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
          
          <h5>E-mail</h5>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
          <button onClick={Registered} type="submit" className={classes.Registerbtn}>Register</button>
        </form>
        </div>
</div>
    );
}

export default Register;
