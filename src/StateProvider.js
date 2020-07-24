import React,{useState} from 'react';

export const CartContext=React.createContext();


export const CartProvider=(props)=>{
     
    const [cart,setCart]= useState([]);
    const [totalPrice,setTotalPrice]=useState(0)
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    );
}