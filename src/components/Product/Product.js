import React from 'react';
import  './Product.css';


function Product({id,title,image,price,rating}) {


  return (
    <div className="product">
        <div className="product__info">
             <p>{title}</p>
              <p className="product__price ">
                 <small>$</small>
                  <strong>{price}</strong>
              </p>
            <div className="product__rating">
            
                {Array(rating)
                .fill()
                .map(()=>(<p>p</p>))}
            </div>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>

        </div>
        <button>Add to cart</button>
    </div>
  );
}

export default Product;
 