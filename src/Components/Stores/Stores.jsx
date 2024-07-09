import React from 'react';
import StoreImage1 from '../Assets/Rectangle 13 (1).png';
import StoreImage2 from '../Assets/Rectangle 13 (2).png';
import StoreImage3 from '../Assets/Rectangle 13 (3).png';
import StoreImage4 from '../Assets/Rectangle 13 (4).png';
import StoreImage5 from '../Assets/Rectangle 13 (5).png';
import StoreImage6 from '../Assets/Rectangle 13 (6).png';
import StoreImage7 from '../Assets/Rectangle 13 (7).png';
import StoreImage8 from '../Assets/Rectangle 13 (8).png';
import StoreImage9 from '../Assets/Rectangle 13 (9).png';
import StoreImage0 from '../Assets/Rectangle 13 (10).png';
import StoreImagea from '../Assets/Rectangle 13 (11).png';
import StoreImageb from '../Assets/Rectangle 13 (12).png';
import StoreImagec from '../Assets/Rectangle 13.png';
import Banner from '../Assets/Frame 157sImage.png';

const Stores = () => {
  return (
    <div className='container'>
        <div className="store-header">
            <h3>Best selling stores</h3>
        </div>

        <div className="store-flex">
            <div className="store-img">
                <img src={Banner} alt="bag" />
            </div>

            <div className="new-stores">
                <div className="mobolaji">
                    <div className="dummy">
                    <img src={StoreImage1} alt="" />
                    <span className="overview">
                        <h3>Mobolaji's Store</h3>
                        <p>"Get all you need"</p>
                    </span>
                </div>
            <div className="types">
              <div className="slot">
                <img src={StoreImage1} alt="" />
                <p>$40.00</p>
              </div>
              <div className="slot">
                <img src={StoreImage2} alt="" />
                <p>$40.00</p>
              </div>
              <div className="slot">
                <img src={StoreImage3} alt="" />
                <p>$40.00</p>
              </div>
            </div>
          </div>


          <div className="mobolaji">
            <div className="dummy">
              <img src="image/icona.svg" alt="" />
              <span  className="overview">
                <h3>Whykay's Store</h3>
                <p>"Get all you need"</p>
              </span>
            </div>
            <div className="types">
              <div className="slot">
                <img src={"image/cap.svg"} alt="" />
                <p>$20.00</p>
              </div>
              <div className="slot">
                <img src="image/girl.svg" alt="" />
                <p>$40.00</p>
              </div>
              <div className="slot">
                <img src="image/bra.svg" alt="" />
                <p>$50.00</p>
              </div>
            </div>
          </div>

            <div className="mobolaji">
            <div className="dummy">
              <img src="image/icona.svg" alt="" />
              <span  className="overview">
                <h3>Emmy's Store</h3>
                <p>"Get all you need"</p>
              </span>
            </div>
            <div className="types">
              <div className="slot">
                <img src="image/bags.svg" alt="" />
                <p>$40.00</p>
              </div>
              <div className="slot">
                <img src="image/shirts.svg" alt="" />
                <p>$100.00</p>
              </div>
              <div className="slot">
                <img src="image/red-shoe.svg" alt="" />
                <p>$450.00</p>
              </div>
            </div>
          </div>

          <div className="mobolaji">
            <div className="dummy">
              <img src="image/icona.svg" alt="" />
              <span  className="overview">
                <h3>ANDE Hub</h3>
                <p>"Get all you need"</p>
              </span>
            </div>
            <div className="types">
              <div className="slot">
                <img src="image/green-shoe.svg" alt="" />
                <p>$200.00</p>
              </div>
              <div className="slot">
                <img src="image/polo.svg" alt="" />
                <p>$30.00</p>
              </div>
              <div className="slot">
                <img src="image/jacket.svg" alt="" />
                <p>$25.60</p>
              </div>
            </div>
          </div>
            </div>
        </div>

    </div>
  )
}

export default Stores