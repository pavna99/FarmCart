import './AddressPage.css';
import React from 'react';
import { Header, Navbar} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import home from '../../Images/Home.svg';
import office from '../../Images/Briefcase.svg';
function AddressPage(props) {
    return (
        <div className='address-overall-container'>
            <Header/>
            <form className='addressInfoContainer'>
                <div className='addressInfoItem'>
                    <label className='addlabel' >Address Type</label>
                    <select className='addvalue' id='addressType'>
                        <option value='home'>
                        <img className='homeimage' src={home} alt="icon" />
                            Home Address
                            </option>
                        <option value='work'>Office Address</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='addressInfoItem'>
                    <label className='addlabel' >Name</label>
                    <input className='addvalue' type='text' id='name' placeholder='example@gmail.com' readOnly />
                </div>
                <div className='addressInfoItem'>
                    <label className='addlabel' >Address</label>
                    <input className='addvalue' type='text' id='address'  placeholder='Neelamkavil House, Near R C Church' readOnly />
                </div>
                <div className='addressInfoItem'>
                    <label className='addlabel' >Pincode</label>
                    <input className='addvalue' type='text' id='pincode'  placeholder='680507' readOnly />
                </div>
                <div className='addressInfoItem'>
                    <label className='addlabel' >Phone Number</label>
                    <input className='addvalue' type='text' id='phoneNumber'  placeholder='9400743624' readOnly />
                </div>
            </form>
            <Link to = "/checkout" >
            <button className='orderbtn' type="submit" >
                        Continue
            </button>
            </Link>
                            

            <Navbar/>
            
        </div>
    );
}

export default AddressPage;