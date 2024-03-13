import React from 'react'
import './productcomponent.css'
import banana from '../../Images/Banana.png'
function ProductComponent() {
  return (
    <div className='product-component-ovrerall'>
      
      <div className='minicard'>
        
        <div className='Textbody'>
        <img src={banana} alt='banana' className='banana'></img>
          <div className='name'>Kerala<br></br> Banana</div>
          <div className='inr'>INR 210</div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
