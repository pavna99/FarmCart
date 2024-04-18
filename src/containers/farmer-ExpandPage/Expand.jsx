import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Navbar } from '../../components';
import './Expand.css';
import { Rating } from 'react-simple-star-rating';
import product from '../../Images/product.png';
import farmer from '../../Images/user (color).svg';
import bar from "../../Images/Bar.png";
import { Link } from "react-router-dom";
function Expand(props) {
    // Counter
    const [counter, setCounter] = useState(1); // Set initial count to 1
    const increase = () => setCounter(prevCount => prevCount + 1);
    const decrease = () => setCounter(prevCount => prevCount > 1 ? prevCount - 1 : 1);

    // Rating Component
    const [rating, setRating] = useState(0)


    return (
        <div className='expand-overall-container'>
            <div className="header1" >
        <img className="logoimage" src={bar} alt="bars" />
        <Link to="/farmnotification">
          <svg
            id="notification-svg"
            className="mySvg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M2.64214 19.3564L2.67143 19.3271V19.2857V11.5714C2.67143 7.62994 5.21382 4.1974 9.02874 3.05293L9.1 3.03155V2.95714V2.57143C9.1 1.21237 10.2124 0.1 11.5714 0.1C12.9305 0.1 14.0429 1.21237 14.0429 2.57143V2.95714V3.03155L14.1141 3.05293C17.929 4.1974 20.4714 7.62994 20.4714 11.5714V19.2857V19.3271L20.5007 19.3564L23.0429 21.8986V23.0429H0.1V21.8986L2.64214 19.3564ZM5.04286 20.5714V20.6714H5.14286H18H18.1V20.5714V11.5714C18.1 7.9162 15.2267 5.04286 11.5714 5.04286C7.9162 5.04286 5.04286 7.9162 5.04286 11.5714V20.5714ZM14.0408 24.5286C13.9879 25.8418 12.897 26.9 11.5714 26.9C10.2459 26.9 9.15497 25.8418 9.10201 24.5286H14.0408Z"
              fill="#7519EB"
              stroke="white"
              stroke-width="0.2"
            />
          </svg>
        </Link>
      </div>

            <div className='product-container'>
          <div className='product-details-box'>
            <div className='productbox'>
              <div className='product-name'>
                product_name
              </div>
              <div className='titleboxfarm'>Price (/kg)</div>
              <div className='price'>INR price</div>
              <div className="titleboxfarm">
                <span className="ColorText">Stock left </span>
                <span className="ColorTextSmall">(in kgs)</span>
            </div>
                        
                <div className='quantity-entry'>
                  <div className="btn__container">
                    <button type="button" onClick={decrease} disabled={counter <= 1}>-</button>
                    <input 
                        type="number" 
                        value={counter} 
                        readOnly
                    />
                    <button type="button" onClick={increase}>+</button>
                  </div>
                </div>
            </div>
          
          <img className="images3" src={product} alt="hoho" />
          </div>
       
          
        </div>
        <div className='reviewpopdiv'>
        <div className='reviewtitle'>Product Reviews</div>
        <div className='farmdetailsdesc'>
                    <div className='reviewname'>
                        <img className='farmer' src={farmer} alt="farmer" />
                    
                        <div className='reviewname'>username</div>
                    </div>
                <div className='reviewdesc'>
                    <Rating className='rating'
                    initialValue={3.5}
                    onClick={function noRefCheck(){}}
                    readonly
                    size={22}
                    allowFraction
                    fillColor={'#FF7A00'}
                    showTooltip
                    tooltipStyle={{
                        'background-color': 'white',
                        color: 'transparent'
                      }}
                    />
                    <div className='review'>
                    “Pomegranate is very organic and fresh. Highly recommend the product and really tasty. Delivery was fast too. Loved it!”
                    </div>
                </div>
                
         </div>

        </div>
        <div className='fnavbar-container' >
          <Link to='/farmdash'>
        <svg c  id="farmdash-svg" className="mySvg" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5958 1.55415C14.3052 1.26357 13.911 1.10033 13.5 1.10033C13.089 1.10033 12.6948 1.26357 12.4041 1.55415L1.55414 12.4042C1.27179 12.6965 1.11556 13.088 1.11909 13.4944C1.12263 13.9008 1.28564 14.2896 1.57302 14.577C1.8604 14.8644 2.24916 15.0274 2.65557 15.0309C3.06197 15.0344 3.45351 14.8782 3.74584 14.5959L4.19999 14.1417V24.35C4.19999 24.7611 4.36329 25.1553 4.65397 25.446C4.94466 25.7367 5.3389 25.9 5.74999 25.9H8.84999C9.26108 25.9 9.65532 25.7367 9.946 25.446C10.2367 25.1553 10.4 24.7611 10.4 24.35V21.25C10.4 20.8389 10.5633 20.4447 10.854 20.154C11.1447 19.8633 11.5389 19.7 11.95 19.7H15.05C15.4611 19.7 15.8553 19.8633 16.146 20.154C16.4367 20.4447 16.6 20.8389 16.6 21.25V24.35C16.6 24.7611 16.7633 25.1553 17.054 25.446C17.3447 25.7367 17.7389 25.9 18.15 25.9H21.25C21.6611 25.9 22.0553 25.7367 22.346 25.446C22.6367 25.1553 22.8 24.7611 22.8 24.35V14.1417L23.2541 14.5959C23.5465 14.8782 23.938 15.0344 24.3444 15.0309C24.7508 15.0274 25.1396 14.8644 25.427 14.577C25.7143 14.2896 25.8774 13.9008 25.8809 13.4944C25.8844 13.088 25.7282 12.6965 25.4458 12.4042L14.5958 1.55415V1.55415Z" stroke="#888888" stroke-width="2"/>
      </svg>
      </Link>
      <Link to='/addproduct'>
      <svg id="products-svg" className="mySvg" xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
        <path d="M2.57141 5.50001H11.0214H10.5714H10.9214H2.57141ZM2.97141 3.50001H16.1714L15.3214 2.50001H3.82141L2.97141 3.50001ZM7.57141 10.25L9.57141 9.25001L11.5714 10.25V5.50001H7.57141V10.25ZM12.1214 18.5H2.57141C2.02141 18.5 1.55074 18.3043 1.15941 17.913C0.768078 17.5217 0.572078 17.0507 0.571411 16.5V4.02501C0.571411 3.79167 0.609078 3.56667 0.684411 3.35001C0.759744 3.13334 0.872078 2.93334 1.02141 2.75001L2.27141 1.22501C2.45474 0.991672 2.68374 0.812339 2.95841 0.687005C3.23308 0.561672 3.52074 0.499339 3.82141 0.500005H15.3214C15.6214 0.500005 15.9091 0.562672 16.1844 0.688005C16.4597 0.813339 16.6887 0.992339 16.8714 1.22501L18.1214 2.75001C18.2714 2.93334 18.3841 3.13334 18.4594 3.35001C18.5347 3.56667 18.5721 3.79167 18.5714 4.02501V8.92501C18.2547 8.80834 17.9297 8.71667 17.5964 8.65001C17.2631 8.58334 16.9214 8.55001 16.5714 8.55001V5.50001H13.5714V9.32501C12.9881 9.65834 12.4797 10.071 12.0464 10.563C11.6131 11.055 11.2714 11.609 11.0214 12.225L9.57141 11.5L5.57141 13.5V5.50001H2.57141V16.5H10.9214C11.0547 16.8833 11.2214 17.2417 11.4214 17.575C11.6214 17.9083 11.8547 18.2167 12.1214 18.5ZM15.5714 18.5V15.5H12.5714V13.5H15.5714V10.5H17.5714V13.5H20.5714V15.5H17.5714V18.5H15.5714Z" fill="#888888"/>
        </svg>
        </Link>
       
        <svg id="chat-svg" className="mySvg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="material-symbols:chat-outline">
          <path id="Vector" d="M6.14285 14.5H14.1429V12.5H6.14285V14.5ZM6.14285 11.5H18.1429V9.5H6.14285V11.5ZM6.14285 8.5H18.1429V6.5H6.14285V8.5ZM2.14285 22.5V4.5C2.14285 3.95 2.33885 3.47933 2.73085 3.088C3.12285 2.69667 3.59352 2.50067 4.14285 2.5H20.1429C20.6929 2.5 21.1639 2.696 21.5559 3.088C21.9479 3.48 22.1435 3.95067 22.1429 4.5V16.5C22.1429 17.05 21.9472 17.521 21.5559 17.913C21.1645 18.305 20.6935 18.5007 20.1429 18.5H6.14285L2.14285 22.5ZM5.29285 16.5H20.1429V4.5H4.14285V17.625L5.29285 16.5Z" fill="#888888"/>
          </g>
        </svg>
         <Link to='/farmprofile'>
        <svg id="profile-svg" className="mySvg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="user">
          <path id="Vector" d="M20.1429 21.5V19.5C20.1429 18.4391 19.7214 17.4217 18.9713 16.6716C18.2211 15.9214 17.2037 15.5 16.1429 15.5H8.14285C7.08199 15.5 6.06457 15.9214 5.31443 16.6716C4.56428 17.4217 4.14285 18.4391 4.14285 19.5V21.5" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_2" d="M12.1429 11.5C14.352 11.5 16.1429 9.70914 16.1429 7.5C16.1429 5.29086 14.352 3.5 12.1429 3.5C9.93371 3.5 8.14285 5.29086 8.14285 7.5C8.14285 9.70914 9.93371 11.5 12.1429 11.5Z" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg></Link>
            
        </div>
            
        </div>
    );
}

export default Expand;