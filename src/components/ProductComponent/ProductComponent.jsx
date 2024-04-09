import React from 'react'
import { API_ENDPOINTS } from '../../components/Auth/apiConfig';  
import './productcomponent.css'


function ProductComponent(props) {
  const { name, price, image, altText } = props;
  const backendBaseUrl = API_ENDPOINTS.media + image;
  console.log(backendBaseUrl)

  return (
    <div className='product-component-overall'>
      <div className='minicard'>
        <div className='Textbody'>
          <img src={backendBaseUrl} alt={altText} className='product-image'></img>
          <div className='name'>{name}</div>
          <div className='inr'>INR {price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
