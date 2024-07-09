import React from 'react';
import './Display.css';
import Image1 from '../Assets/Ellipse 3Dress-1.png';
import Image2 from '../Assets/Ellipse 4dress-2.png';
import Image3 from '../Assets/Ellipse 5dress-3.png';
import Image4 from '../Assets/Ellipse 7dress-4.png';
import Image5 from '../Assets/Ellipse 6dress-5.png';
import Image6 from '../Assets/Ellipse 8dress-6.png';
import Image7 from '../Assets/Ellipse 9dress-7.png';
import Image8 from '../Assets/Ellipse 10dress-8.png';
import Image9 from '../Assets/Ellipse 11dress-9.png';
import Image10 from '../Assets/Frame 49.png';


const Display = () => {
  return (
    <div className='container'>
        <div className="flex">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
            <img src={Image7} alt="" />
            <img src={Image8} alt="" />
            <img src={Image9} alt="" />
            <img src={Image10} alt="" />

        </div>

    </div>
  )
}

export default Display