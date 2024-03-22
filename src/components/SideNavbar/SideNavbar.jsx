import React from 'react'
import './sidenavbar.css'
import sidenavlogo1 from '../../Images/sidenavbarlogo1.svg'
import sidenavlogo2 from '../../Images/sidenavbarlogo2.svg'
import sidenavlogo3 from '../../Images/sidenavbarlogo3.svg'
import sidenavlogo4 from '../../Images/sidenavbarlogo4.svg'
import sidenavlogo5 from '../../Images/sidenavbarlogo5.svg'
import cartlogo from '../../Images/shopping-cart-icon.svg'
import logo from '../../Images/logo.png'

const sidenav=[
    {
        img:sidenavlogo1,
        title:"Dashboard"
    },
    {
        img:sidenavlogo2,
        title:"Orders"
    },
    {
        img:sidenavlogo3,
        title:"Farms Nearby"
    },
    {
        img:sidenavlogo4,
        title:"Profile"
    },
    {
        img:sidenavlogo5,
        title:"Settings"
    },
]

function SideNavbar() {
  return (
    <div id="nav-container">
        <div className='cart-icon'>
            <img src={cartlogo} alt="" />
        </div>
        <div className="bg"></div>
        <div className="button" tabindex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
            <img className='logoimg' src={logo} alt="" />
            <ul>
                {
                    sidenav.map((item, index) => (
                        <li>
                        <a href="#0">
                            <div className='nav-list'>
                                <img className="nav-list-img" src={item.img} alt="" />
                                <p className='nav-list-p'><u>{item.title}</u></p>
                            </div>
                        </a>
                    </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default SideNavbar
