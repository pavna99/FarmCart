import React from 'react'

import { API_ENDPOINTS } from '../../components/Auth/apiConfig';  
import './productcomponent.css'
import { Link } from 'react-router-dom';


function ProductComponent(props) {
  const { name, price, image, altText } = props;
  const backendBaseUrl = API_ENDPOINTS.media + image;
  console.log(props.id)

  return (
    <Link to={{
      pathname: '/expand',
      state: { product_id: props.id }
    }}>
    <div className='product-component-overall'>

      <div className='minicard'>
        <div className='Textbody'>
          <img src={backendBaseUrl} alt={altText} className='product-image'></img>
          <div className='name'>{name}</div>
          <div className='inr'>INR {price}</div>
        </div>
      </div>
      </div>
    </Link> 
  )
}

export default ProductComponent
