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

      <div className='search-bar'>
        <div className='select'>
          <p>All category </p>
          <IoMdArrowDropdown className='dropdown' />
        </div>

        <div class="vertical-line"></div>
         

        <form>
          <div className="search">
            <CiSearch className='search-icon'/>
            <input className='search-input' type="text" placeholder='Search all products or brands here' />
          </div>
        </form>
        
      </div>

      <div className="nav-cart-heart">
          <RiShoppingCartFill className='cart' />
          <div className="count">10</div>
        



       <FaHeart className='heart' />
       <div className="count">5</div>
      </div>

    </div>
  )
}

export default Navbar