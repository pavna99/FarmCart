import React from 'react';
import './LocationPage.css';
import { Link , useNavigate} from 'react-router-dom';
import { API_ENDPOINTS } from '../../components/Auth/apiConfig';  



function LocationPage() {
  const navigate = useNavigate(); 
  function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location_latitude = position.coords.latitude.toString();
          const location_longitude = position.coords.longitude.toString();
          const accessToken = localStorage.getItem('accessToken');
          console.log(accessToken)
          if (!accessToken) {
            console.error('No access token available.');
            return;
          }
  
          const locationData = { location_latitude, location_longitude };
          try {
            const response = await fetch(`${API_ENDPOINTS.users}/location/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
              body: JSON.stringify(locationData)
            });
            if (response.ok) {
              const result = await response.json();
              console.log(result)
              console.log('Location saved:', result);
              navigate('/dashboard');

            } else {
              throw new Error('Failed to save location to the server');
            }
          } catch (error) {
            console.error("Error saving location: ", error);
            alert("Error saving location: " + error.message);
          }
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
          if (error.code === error.PERMISSION_DENIED) {
            alert("Location permission was denied.");
          } else {
            alert("Error getting location: " + error.message);
          }
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
  }
  

  async function requestLocationPermission() {
    try {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      return permissionStatus.state;
    } catch (error) {
      console.error("Error requesting location permission:", error);
      throw error; 
    }
  }

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
              <Link to = "/dashboard">
              <div className='Nomessage'>
                    No, Choose location manually
              </div>
              </Link>
          </div>

      </div>
  );
}

export default LocationPage;


    // const getLocation = () => {
    //     if ('geolocation' in navigator) {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
    //         },
    //         (error) => {
    //           console.error("Error Code = " + error.code + " - " + error.message);
    //           alert("Error getting location: " + error.message);
    //         },
    //         {
    //           enableHighAccuracy: true, 
    //           timeout: 5000, 
    //           maximumAge: 0 
    //         }
    //       );
    //     } else {
    //       alert('Geolocation is not supported by your browser.');
    //     }
    // };