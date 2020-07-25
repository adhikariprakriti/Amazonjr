import React ,{useContext}from 'react';
import {CartContext} from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
  const [cart,setCart]=useContext(CartContext);
  //const [totalPrice,setTotalPrice]=useContext(CartContext);
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0)
  
   const productsInCart = cart?.length===0?
                            (<h2>your cart is empty</h2>):
   
                            (cart.map((item)=>{
                             return(
                                    <CheckoutProduct key={item.id}
                                                      title={item.title}
                                                      id={item.id}
                                                      image={item.image}
                                                       price={item.price}
                                                        rating={item.rating}
                                                          />
                                     );
                                   }))
  return (
    <div className="checkout">
      <div className="checkout__left">

         <h1 className="checkout__title">Your Shopping Basket</h1>
             {
               productsInCart
            }

        </div>
       {
        cart?.length>0 ?(
          <div className="checkout__right">
            
             <Subtotal totalPrice={totalPrice}/>
          </div>):null
        }

     </div>
  );
}

export default Checkout;
