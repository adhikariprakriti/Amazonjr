import React,{useState} from 'react';

export const CartContext=React.createContext();


export const CartProvider=(props)=>{
   // const [user,setUser]= useState(null);
    const [cart,setCart]= useState([]);
    const [show,setShow]=useState(null);
    //const [email,setEmail]=useState('');
    //const [password,setPassword]=useState('');
    //const [username,setUsername]=useState('');
//,email,setEmail,password,setPassword,username,setUsername
    
    return(
        <CartContext.Provider value={[cart,setCart,show,setShow]}>
            {props.children}
        </CartContext.Provider>
    );
}