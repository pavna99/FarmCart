import React from 'react';
import './LocationPage.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContext';


function LocationPage() {
    const { accessToken, login, logout } = useAuth();

    const getLocation = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
            (error) => {
              console.error("Error Code = " + error.code + " - " + error.message);
              alert("Error getting location: " + error.message);
            },
            {
              enableHighAccuracy: true, 
              timeout: 5000, 
              maximumAge: 0 
            }
          );
        } else {
          alert('Geolocation is not supported by your browser.');
        }
    };

    return (
        <div className='LocationPage'>
            
            <div className="locationbox">
                <div className='Sharelocation'>
                    Share your location
                </div>
                <div className='Locationdesc'>
                If we have your location, we can <br>
                </br>provide the nearest farms and delivery points so as to ease your distance.
                </div>
                <button className='continuebutton' onClick={getLocation}>Get Location</button>
                <div className='Nomessage'>
                     No, Choose location manually
                </div>
            </div>

        </div>
    );
}

export default LocationPage;