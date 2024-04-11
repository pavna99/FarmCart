import React, { useState } from 'react';
import './Checkout.css'; 
import home from '../../Images/Home.svg';
import office from '../../Images/Briefcase.svg';
import { Navbar,Header} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import order from '../../Images/order.png';
function Checkout(props) {
    const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
};
    return (
        <div className='checkoutpage-overall-container'>
            
            <Header/>
            <div className='checkout-container'>
            <div className={selected ? 'AddressSelected' : 'Address'} onClick={handleSelect}>
        <div className="Frame11">
            <div className={selected ? 'Home Selected' : 'Home'}>
                <img src={home} alt="homeicon" />
            </div>
            <div className={selected ? 'HomeAddress Selected' : 'HomeAddress'}>Home Address</div>
        </div>
        
        <div className="Frame10">
          <div className={selected ? 'EnricSNeelamkavil Selected' : 'EnricSNeelamkavil'}>Enric S Neelamkavil</div>
          <div className={selected ? 'numberselect Selected' : 'numbernoselect'}>+91 94007 43624</div>
        </div>
        <div className={selected ? 'Neelamkavil Selected' : 'Neelamkavil'}>
          Neelamkavil House, Near R C Church, Pavaratty P. O, 680507
        </div>
      </div>
      <div className={!selected ? 'AddressSelected' : 'Address'} onClick={handleSelect}>
        <div className="Frame11">
          <div className={!selected ? 'Briefcase Selected' : 'Briefcase'}>
            <img src={office} alt="workicon" />
          </div>
          <div className={!selected ? 'OfficeAddress Selected' : 'OfficeAddress'}>Office Address</div>
        </div>
        <div className="Frame10">
          <div className={!selected ? 'EnricSNeelamkavil Selected' : 'EnricSNeelamkavil'}>Enric S Neelamkavil</div>
          <div className={!selected ? 'numberselect Selected' : 'numbernoselect'}>+91 94007 43624</div>
        </div>
        <div className={!selected ? 'Sanjos Selected' : 'Sanjos'}>
          Sanjos Voice, Media Tower, Preist House, Pavaratty P.O, 680507
        </div>
      </div>
    
    
                <div className='dottedline2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="338" height="2" viewBox="0 0 338 2" fill="none">
                    <path d="M0.25 1H337.75" stroke="#7519EB" stroke-dasharray="5 5"/>
                    </svg>
                </div>
                
            
                <div className="container2">
                    <div className="titleContainer2">
                        <div className="title2">Payment Details</div>
                    </div>
                    <div className="detailsContainer2">
                        <div className="rowContainer2">
                        <div className="row2">
                            <div className="label2">Item Price</div>
                            <div className="value2">₹ 2,940.00</div>
                        </div>
                        <div className="row2">
                            <div className="label2">Packing Charges</div>
                            <div className="value2">₹ 20.00</div>
                        </div>
                        </div>
                        <div className="separator2"></div>
                        <div className="row2">
                        <div className="totalLabel2">Total Amount</div>
                        <div className="totalValue2">₹ 30000</div>
                        </div>
                    </div>
                    </div>
                    <div className="secondContainer2">
                        <div className="secondIconContainer2">
                            <div className="secondIcon2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_600_2464)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.116272 8.39331C0.116272 6.40419 0.906448 4.49653 2.31297 3.09001C3.71949 1.68349 5.62715 0.893311 7.61627 0.893311C9.6054 0.893311 11.5131 1.68349 12.9196 3.09001C14.3261 4.49653 15.1163 6.40419 15.1163 8.39331C15.1163 10.3824 14.3261 12.2901 12.9196 13.6966C11.5131 15.1031 9.6054 15.8933 7.61627 15.8933C5.62715 15.8933 3.71949 15.1031 2.31297 13.6966C0.906448 12.2901 0.116272 10.3824 0.116272 8.39331ZM7.18827 11.6033L11.5063 6.20531L10.7263 5.58131L7.04427 10.1823L4.43627 8.00931L3.79627 8.77731L7.18827 11.6033Z" fill="#0BCE83"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_600_2464">
                                    <rect width="15" height="15" fill="white" transform="translate(0.116272 0.893311)"/>
                                    </clipPath>
                                </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="secondContentContainer2">
                            <div className="secondTitle2">Pay on Delivery (POD)</div>
                            <div className="secondDescription2">Pay by cash/ any UPI apps</div>
                        </div>
                    </div>
                    </div>
                    <Link to="/checkout/ordersucess">
                    <div className='orderbtn2' type="submit" >
                        <img className="bagicon"src={order} alt="bagicon"></img>
                        <div className='placeorder'>Place order</div>
                    </div>
                    </Link>
                
            <Navbar/>
            
        </div>
    );
}

export default Checkout;