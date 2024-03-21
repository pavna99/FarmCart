import React from 'react'
import './dashboard.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Navbar,DashboardComponent,ProductComponent} from '../../components'
// import  {useState} from 'react'
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';


function Dashboard() {
  return (
    <div className='dashboard-overall-container'>
      <div className='header1'>
        <img className='images1' src={bar} alt="bars"/>
        <img className='images1' src={cart} alt="cart"/>
      </div>
      
      
      <h1 className='goodmorni'>Good Morning,</h1>
      <h2 className='username'>Enric !</h2>
      <div class = 'search-box'>
      <div class = "search-btn">
            <i class="fas fa-search"></i>
          </div>
        <input class = "search-text" type="text" placeholder = "Search Anything" />
          
      </div>
      
      <DashboardComponent/>
      <Navbar/>
      </div>
  )
}

export default Dashboard