import React from 'react';
import './NotificationPage.css';
import { Navbar,Header} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';

function NotificationPage(props) {
    return (
        <div className='notification-overall-container'>
            <Header/>
            <div className="overallframe">
                <div className="Notificationcell">
                        <div className="Avatarandsubjectcontainer">
                            
                            <div className="Subjectlinecontainer">
                                Account Sign-in Detected
                            </div>
                            <div className="Timestampcontainer">
                                Today at 9:42 AM
                            </div>
                        </div>
                  </div>
                  <div className="Notificationcell">
                        <div className="Avatarandsubjectcontainer">
                            
                            <div className="Subjectlinecontainer">
                                Account Sign-in Detected
                            </div>
                            <div className="Timestampcontainer">
                                Today at 9:42 AM
                            </div>
                        </div>
                  </div>
     
     </div>
    <Navbar/>
    </div>
    );
}

export default NotificationPage;