import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import {useSelector} from 'react-redux'
const Navbar = () => {
    const item = useSelector((state)=> state.cart)
  return (
    <>
 <div className="navigation">
     <span className='logo'>Redux Store</span>
     <NavLink className="navLink" to="/">Home</NavLink> 
     <NavLink className="navLink" to="/cart">Cart</NavLink>
     <div className="cartCount">
        <span>cart items :{item.length}</span>
     </div>
     </div>
    </>
  )
}

export default Navbar
