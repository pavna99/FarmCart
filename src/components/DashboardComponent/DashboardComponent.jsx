import React from 'react';
import './DashboardComponent.css';
import  {useState,useEffect} from 'react'
import ProductComponent from '../ProductComponent/ProductComponent';

    const DashboardComponent = () => {
        const [selectedHeading, setSelectedHeading] = useState('Heading1');
      
        useEffect(() => {
          
          console.log('Selected Heading:', selectedHeading);
        }, [selectedHeading]); 

    return (
        <div className='Section1'>
        <div className='Tileset'>
           <div id="he1"
            className={selectedHeading === 'Heading1' ? 'selected' : ''}
            onClick={() => setSelectedHeading('Heading1')}>
            Fruits
            </div>
            
        
            <div id="he1"
                className={selectedHeading === 'Heading2' ? 'selected' : ''}
                onClick={() => setSelectedHeading('Heading2')}
            >
                Vegetables
            </div>
            
            <div id="he1"
                className={selectedHeading === 'Heading3' ? 'selected' : ''}
                onClick={() => setSelectedHeading('Heading3')}
            >
                Exotic
            </div>
        </div>

      <div className='seemore'> see more</div>


      <div className="content">
        {selectedHeading === 'Heading1' && 
        <div className='Productcompset'>
            <div className='Productbox'><ProductComponent/></div>
            <div className='Productbox'><ProductComponent/></div>
            <div className='Productbox'><ProductComponent/></div>
            <div className='Productbox'><ProductComponent/></div>
        </div>
      }
        {selectedHeading === 'Heading2' && 
        <div className='Productcompset'>
            <div className='Productbox'><ProductComponent/></div>
            
        </div>
        }
        {selectedHeading === 'Heading3' && 
        <div className='Productcompset'>
            <div className='Productbox'><ProductComponent/></div>
            <div className='Productbox'><ProductComponent/></div>
        </div>
        }
      </div>
        </div>
    );
}

export default DashboardComponent;