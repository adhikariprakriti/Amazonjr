import React,{useContext} from 'react';
import  './Product.css';
import {CartContext} from  '../../StateProvider';
import {useHistory} from 'react-router-dom';
import Modal from '../Modal/Modal';


function Product({id,title,image,price,rating,user}) {

const history=useHistory();
const [cart,setCart,show,setShow] = useContext(CartContext);

const addToCart=()=>{
  console.log("clicked...");
  if(user){
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
  }else{
    console.log("please login");
    setShow(true);
  }
}

  return (
    <div className="product" id={id}>

        <Modal show={show} clicked={()=>setShow(!show)}>
             <h3 style={{ textAlign:"center",marginTop:"20px",marginBottom:"15px", }}><strong>Please Login or Register</strong></h3>
             <div style={{ dislpay:"flex",margin:"auto",textAlign:"center",marginBottom:"15px"}}>
                 <button style={{ marginRight:"5px" ,height:"auto"}} onClick={()=>{history.push("/Login")
                  setShow(!show)
                  }}>SIgnIN</button>    
                 <button style={{ marginLeft:"5px", height:"auto"}} onClick={()=>{history.push("/Register")
                                  setShow(!show)
                                }} >Register</button>
            </div>
        </Modal>

    

      
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
 