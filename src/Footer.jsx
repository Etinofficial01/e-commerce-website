import React from 'react';
import Email from './Components/Assets/Vector.png';
import Facebook from './Components/Assets/Frame (1).png';
import Youtube from './Components/Assets/Frame.png';
import Instagram from './Components/Assets/Vector (1).png';

const Footer = () => {
  return (
    <footer>
    <div className='info'>

        <div className="voucher">
            <h2>Get Voucher From Us</h2>

            <p>Enter your email and stand a chance to win a free voucher from us</p>
            <form>
                <img src={Email} alt="" />
                <input type="email" placeholder="Enter your email" required />
                <p>&rarr;</p>
            </form>

           
        </div>

        <div id="services">
            <ul>
                <h3>Services</h3>
                <li>About Us</li>
                <li>Careers</li>
                <li>Delivery information</li>
                <li>Terms & Condition</li>
                <li>Policy and Privace</li>
            </ul>
            <ul>
                <h3>Pages</h3>
                <li>My Account</li>
                <li>Login</li>
                <li>Wish List</li>
                <li>Cart</li>
                <li>Checkout</li>
            </ul>
        </div>

    </div>

    <div className="social">
                <img src={Facebook} alt="" /><img src={Youtube} alt="" /><img src={Instagram} alt="" />
            </div>

    </footer>
    
  )
}

export default Footer