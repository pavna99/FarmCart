import React from 'react';
import './dashboard.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navbar,DashboardComponent, Header} from '../../components'
// import  {useState} from 'react'
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className='dashboard-overall-container'>
      <Header/>
      
      <h1 className='goodmorni'>Good Morning,</h1>
      <h2 className='username'>Enric !</h2>
      <Link to = "/search">
        <div class = 'search-box'>
          <div class = "search-btn">
            <i class="fas fa-search"></i>
          </div>
          <input class = "search-text" type="text" placeholder = "Search Anything" />
          
      </div>
      </Link>
      <DashboardComponent/>
      <Navbar/>
      </div>
  )
}

export default Dashboard
