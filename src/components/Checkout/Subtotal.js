import React,{useContext} from 'react';
import './Subtotal.css';
import  CurrencyFormat from "react-currency-format";
import {CartContext} from '../../StateProvider';
import Modal from '../Modal/Modal';
import {Link,useHistory} from 'react-router-dom';



function Subtotal({totalPrice}) {
const history=useHistory();
  var CurrencyFormat = require('react-currency-format');
  const [cart,setCart,show,setShow,email,setEmail]=useContext(CartContext);
  const complete=()=>{
    
    setCart([]);
    history.push('/');
    setShow(!show);

}

const checkout=()=>{
  setShow(true);

  }

  return (
    <div className="subtotal">

    <Modal show={show} clicked={()=>setShow(!show)}>
             <h3 style={{ textAlign:"center",marginTop:"20px",marginBottom:"15px", }}><strong>Congrulations!!!</strong></h3>
             <p style={{ textAlign:"center",marginTop:"20px",marginBottom:"15px", }}>Your order has been successfully Placed</p>
         {/* <button  onClick={event =>  window.location.href='/'}>Complete Action</button>*/}
                    <div style={{ dislpay:"flex",margin:"auto",textAlign:"center"}}>
     
           <button onClick={complete} className="link">Complete Action</button>
              </div>
        </Modal>

        
        {/* price */}
         
    <CurrencyFormat 
           value={2456981} 
           displayType={'text'} 
           thousandSeparator={true} 
           prefix={'$'}
           renderText={value => <p>subtotal <strong>({cart.length} items)</strong> : <strong>{totalPrice}</strong></p>} />
                      
          
        {/* button */}
        <button onClick={checkout}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
