import React,{useState,useContext} from 'react';
import classes from './Login.module.css';
import {Link,useHistory } from "react-router-dom";
import {auth} from '../../firebase';
import {CartContext} from '../../StateProvider';

function Login(props) {
  ////const [user,setUser]=useState('');
  const history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


const SignIn=event=>{
  event.preventDefault();
  //Login logic
    console.log(email);
   // console.log(user);

    
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>history.push("/"))
        .catch((error)=> alert(error.message));

    
     

}
const Register=event=>{
event.preventDefault();
  //Register logic
  history.push('/Register');


}

  return (
    <div className={classes.Login}>
         <Link to="/">
           <img 
             className={classes.Login__logo}
             src=" http://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt=""
             />
         </Link>

         <div className={classes.Login__container}>
             <h1>Sign In</h1>
             <form> 

             <h5>E-mail</h5>

              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
         
               <h5>Password</h5>
               <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
               <button onClick={SignIn} type="submit" className={classes.SignIn}>Sign In</button>
             </form>
             <p>Don't have account??</p>
             <button onClick={Register} type="submit" className={classes.Register}>Create Your Amazon Account</button>
         </div>
    </div>
  );   
}

export default Login;
