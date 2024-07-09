import React from 'react';
import './Showcase.css'
import { RiFlashlightLine } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import CardImage from '../Assets/Rectangle 8sale1 (1).png';
import CardImage2 from '../Assets/Rectangle 8image2.png';
import CardImage3 from '../Assets/Rectangle 8image3.png';
import CardImage4 from '../Assets/Rectangle 8image4.png';
import CardImage6 from '../Assets/Rectangle 8image5.png';


const Showcase = () => {
  return (
    <div className='showcase'>
        <div className="container">
        
                <div className="showcase-header">
                    <div className="flash-sale">
                        <RiFlashlightLine  className='flash-icon'/>
                        <h3>Flash Sale</h3>
                        <div className="time">
                            <span class="segment">08</span>
                            <span class="colon">:</span>
                            <span class="segment">17</span>
                            <span class="colon">:</span>
                            <span class="segment">58</span>
                        </div>
                    </div>
                    

                    <div className="arrow">
                     <button className='left'><FaArrowLeftLong /></button> 
                     <button className='right
                     '><FaArrowRightLong /></button>
                    </div>
                </div>


                <div className="showcase-cards">
                    <div className="card">
                        <div className="card-img">
                            <img src={CardImage} alt="Card-img" class="product-image"/>
                        </div>
                        
                        <button class="like-button"><IoIosHeartEmpty /></button>
                        <p className='card-p'>Comfy cotton sweater</p>
                        <div class="prices">
                            <span class="new-price">$400.40</span>
                            <span class="old-price">$400.40</span>
                        </div>
                        <hr />
                        <div class="loading-section">
                            <div class="loading-bar">
                                <div class="loading-progress"></div>
                            </div>
                            <p class="votes">8/10 votes</p>
                            
                        </div>
                    </div>

                    <div className="card">
                        <img src={CardImage2} alt="Card-img" class="product-image"/>
                        <button class="like-button"><IoIosHeartEmpty /></button>
                        <p className='card-p'>Brown Fadora Hat</p>
                        <div class="prices">
                            <span class="new-price">$235.95</span>
                            <span class="old-price">$400.40</span>
                        </div>
                        <hr />
                        <div class="loading-section">
                            <div class="loading-bar">
                                <div class="loading-progress"></div>
                            </div>
                            <p class="votes">8/10 votes</p>
                            
                        </div>
                    </div>

                    <div className="card">
                        <img src={CardImage3} alt="Card-img" class="product-image"/>
                        <button class="like-button"><IoIosHeartEmpty /></button>
                        <p className='card-p'>Laptop Bag</p>
                        <div class="prices">
                            <span class="new-price">$345.95</span>
                            <span class="old-price">$400.40</span>
                        </div>
                        <hr />
                        <div class="loading-section">
                            <div class="loading-bar">
                                <div class="loading-progress"></div>
                            </div>
                            <p class="votes">8/10 votes</p>
                            
                        </div>
                    </div>

                    <div className="card">
                        <img src={CardImage4} alt="Card-img" class="product-image"/>
                        <button class="like-button"><IoIosHeartEmpty /></button>
                        <p className='card-p'>Beautiful Anide Boot</p>
                        <div class="prices">
                            <span class="new-price">$790.99</span>
                            <span class="old-price">$400.40</span>
                        </div>
                        <hr />
                        <div class="loading-section">
                            <div class="loading-bar">
                                <div class="loading-progress"></div>
                            </div>
                            <p class="votes">8/10 votes</p>
                            
                        </div>
                    </div>

                    <div className="card">
                    <img src={CardImage6} alt="Card-img" class="product-image sweater-img"/>
                        <button class="like-button"><IoIosHeartEmpty /></button>
                        <p className='card-p'>Sunny shirt</p>
                        <div class="prices">
                            <span class="new-price">$790.99</span>
                            <span class="old-price">$400.40</span>
                        </div> 
                        <hr />
                        <div class="loading-section">
                            <div class="loading-bar">
                                <div class="loading-progress"></div>
                            </div>
                            <p class="votes">8/10 votes</p>
                            
                        </div>
                    </div>

                </div>
        </div>

    </div>
  )
}

export default Showcase