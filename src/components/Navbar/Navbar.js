import React,{useContext} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from '../../StateProvider';

function Navbar() {

const [cart,setCart]=useContext(CartContext);


  return (   
    <nav className="header">
        <Link to="/Login">
          <img className="header__logo" src=" http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo"/>
        </Link>

        <div className="search">
             <input type="text" className="header__searchInput"/>
             <SearchIcon className="header__searchIcon" />
         </div>

         <div className="headerNavigation">
           <Link to="/Login" className="header__link">
             <div className="header__option">
               <span className="span__one">Hello Prakriti</span>
               <span className="span__two">Sign In</span>
             </div>
           </Link>

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

           <Link to="/checkout" className="header__link">
             <div className="header__optionBasket">
               {/* shopping icon*/}
                  <ShoppingCartIcon/>
                {/* items addedin basket*/}
             <span className="header__basketCount">{cart?.length}</span>
             </div>
           </Link>
  


         </div>
    </nav>
  );
}

export default Navbar;
