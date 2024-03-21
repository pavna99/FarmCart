import React from 'react'
import './dashboard.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Navbar } from '../../components'
import  {useState} from 'react'

function Dashboard() {
  return (
    <div className='dashboard-overall-container'>
      <h1></h1>
      
      <Navbar/>
      <h1 className='goodmorni'>Good Morning,</h1>
      <h2 className='username'>Enric ! </h2>
      <div class = 'search-box'>
      <div class = "search-btn">
            <i class="fas fa-search"></i>
          </div>
        <input class = "search-text" type="text" placeholder = "Search Anything" />
          
      </div>
      </div>
  )
}

export default Dashboard
