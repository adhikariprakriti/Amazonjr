import React ,{useContext}from 'react';
import {CartContext} from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [cart,setCart]=useContext(CartContext);
  //const [totalPrice,setTotalPrice]=useContext(CartContext);
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0)
  
   const productsInCart =cart.map((item)=>{
     return(
    <CheckoutProduct key={item.id}
                      title={item.title}
                      id={item.id}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />
  );
})
  return (
    <div className="checkout">
         <h1>welcome</h1>
{
   productsInCart
}

<h1>totalprice: {totalPrice}</h1>
     </div>
  );
}

export default Checkout;
