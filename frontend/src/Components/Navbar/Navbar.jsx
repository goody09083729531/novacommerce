import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/navlogo1.png';
import cart_icon from '../Assets/carticon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>NOVA</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("shoe")}}><Link style={{ textDecoration: 'none'}} to='/shoe'>Shoes</Link>{menu==="shoe"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("mobility")}}><Link style={{ textDecoration: 'none'}} to='/mobility'>Mobilities</Link>{menu==="mobility"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("furniture")}}><Link style={{ textDecoration: 'none'}} to='/furniture'>Furnitures</Link>{menu==="furniture"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("lawnmower")}}><Link style={{ textDecoration: 'none'}} to='/lawnmower'>Mowers</Link>{menu==="lawnmower"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>}

            
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar