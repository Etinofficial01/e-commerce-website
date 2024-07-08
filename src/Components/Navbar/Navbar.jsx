import React from 'react';
import './Navbar.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <p><span>mye</span>shop.com</p>
      </div>

      <div className='form'>
        <p>All categories <IoMdArrowDropdown /> </p>

        <CiSearch />
        <input type="text" placeholder='Search all products or brands here' />
      </div>

      <div className="nav-cart-heart">
       <RiShoppingCartFill />
       <div className="count">10</div>
      </div>

    </div>
  )
}

export default Navbar