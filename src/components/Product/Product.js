import React,{useContext} from 'react';
import  './Product.css';
import {CartContext} from  '../../StateProvider';


function Product({id,title,image,price,rating}) {


const [cart,setCart] = useContext(CartContext);

const addToCart=()=>{
  console.log("clicked...");
   const selectedProduct={
     title: title,
     price:price,
     rating: rating,
     id:id,
     image:image
   }
   //console.log(selectedProduct);
   setCart(()=>[...cart,selectedProduct])
   //console.log(cart);

   const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0)
   //console.log(totalPrice);
}

  return (
    <div className="product" id={id}>
        <div className="product__info">
             <p>{title}</p>
              <p className="product__price  ">
                 <small>$</small>
                  <strong>{price}</strong>
              </p>
            <div className="product__rating">
            
                {Array(rating)
                .fill()
                .map(()=>(<p>p</p>))}
            </div>
            <img src={image} alt=""/>

        </div>
        <button  onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
 