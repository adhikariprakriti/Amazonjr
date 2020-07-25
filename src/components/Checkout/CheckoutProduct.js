import React,{useContext} from 'react';
import "./CheckoutProduct.css";
import {CartContext} from '../../StateProvider';

function CheckoutProduct({id,image,rating,price,title}) {

  const [cart,setCart]=useContext(CartContext);



  const removeProduct=()=>{
    const removeProduct={
      
      price:price,
      id:id,
      
    }
    //console.log(selectedProduct);
    const indexOfProduct=cart.findIndex(x => x.id === removeProduct.id);
     console.log(indexOfProduct);
    cart.splice(indexOfProduct,1);
    console.log(cart);
    setCart(()=>[...cart]);
    //console.log(cart);
 
    //const totalPrice=cart.reduce((acc,curr)=>acc-curr.price,....)
   
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt=""/>
      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price  ">
                 <small>$</small>
                  <strong>{price}</strong>
              </p>
            <div className="checkoutProduct__rating">
            
                {Array(rating)
                .fill()
                .map(()=>(<p>p</p>))}
            </div>

        <button onClick={removeProduct}>Remove from cart</button>
        </div>

      </div>
    
  );
}

export default CheckoutProduct;
