import React, { useState } from 'react';
import './LocationPage.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContext';
import { Geolocation } from '@capacitor/geolocation';



function LocationPage() {
  const { accessToken, login, logout } = useAuth();

  async function getLocation() {
    try {
        const position = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true,
        });

        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
    } catch (error) {
        console.error('Error getting location:', error);
        if (error.code === 'NOT_AUTHORIZED') {
            alert('Location permission not granted');
        } else {
            alert('Error getting location: ' + error.message);
        }
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


  //

  // function getLocation() {
  //     if ('geolocation' in navigator) {
  //       requestLocationPermission().then(permissionStatus => {
  //         if (permissionStatus === 'granted') {
  //           navigator.geolocation.getCurrentPosition(
  //             (position) => {
  //               alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  //             },
  //             (error) => {
  //               console.error("Error Code = " + error.code + " - " + error.message);
  //               alert("Error getting location: " + error.message);
  //             },
  //             {
  //               enableHighAccuracy: true,
  //               timeout: 5000,
  //               maximumAge: 0
  //             }
  //           );
  //         } else {
  //           alert('Location permission not granted.');
  //         }
  //       }).catch(err => {
  //         console.error("Permission request error: ", err);
  //         alert("Error requesting location permissions.");
  //       });
  //     } else {
  //       alert('Geolocation is not supported by your browser.');
  //     }
  // }

  // async function requestLocationPermission() {
  //   // This function should handle the permission request.
  //   // The implementation depends on whether you're using a library/plugin and which one.
  //   // Return a promise that resolves with the permission status ('granted', 'denied', etc.)
  // }



  //