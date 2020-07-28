import React,{useContext} from 'react';
import './Navbar.css';
import {Link,useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from '../../StateProvider';
import {auth} from '../../firebase';
import Modal from '../Modal/Modal';


function Navbar({user}) {

const [cart,setCart,show,setShow]=useContext(CartContext);
const history=useHistory();

//const [user,setUser]=useContext(CartContext);

const logout=()=>{
  console.log("clicked.....")
  console.log(user);
       if(user){
         auth.signOut();
        history.push("/");
       }
}


  return (   
    <nav className="header">
        <Link to="/">
          <img className="header__logo" src=" http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo"/>
        </Link>

        <div className="search">
             <input type="text" placeholder="currently Searchbar is not functional........" className="header__searchInput"/>
             <SearchIcon className="header__searchIcon" />
         </div>

         <div className="headerNavigation">
           <Link to={user ?"/" :"/Login"} className="header__link">
             <div onClick={logout} className="header__option">
               <span className="span__one">Hello {user?.email}</span>
               <span className="span__two">{user ? "SignOut" : "SignIn" }</span>
             </div>
           </Link>

{              user? null :
              ( <Link to="/Register" className="header__link">
               <div className="header__option">
               <span className="span__one">No Account</span>
               <span className="span__two">Register</span>
               </div>
             </Link>)
}
  
           <Link to="/" className="header__link">
             <div className="header__option">
               <span className="span__one">Returns</span>
               <span className="span__two">Orders</span>
             </div>
           </Link>


           <Link to="/" className="header__link">
             <div className="header__option">
               <span className="span__one">Your</span>
               <span className="span__two">Prime</span>
             </div>
           </Link>

           <Link to= "/checkout" className="header__link">

             <div className="header__optionBasket">
               {/* shopping icon*/}
                  <ShoppingCartIcon/>
                {/* items addedin basket*/}
             <span className="header__basketCount">{user? cart?.length:null}</span>
             </div>
           </Link>
  
         </div>
    </nav>
  );
}

export default Navbar;
