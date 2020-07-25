import React,{useContext} from 'react';
import './Subtotal.css';
import  CurrencyFormat from "react-currency-format";
import {CartContext} from '../../StateProvider';


function Subtotal({totalPrice}) {

  var CurrencyFormat = require('react-currency-format');
  const [cart,setCart]=useContext(CartContext);
  

  return (
    <div className="subtotal">
        
        {/* price */}
         
    <CurrencyFormat 
           value={2456981} 
           displayType={'text'} 
           thousandSeparator={true} 
           prefix={'$'}
           renderText={value => <p>subtotal <strong>({cart.length} items)</strong> : <strong>{totalPrice}</strong></p>} />
                      
          
        {/* button */}
        <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
