import React from 'react';

function NotificationPopup({ message, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'lightgreen',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000, // Ensure it's above other content
    }}>
      <span>{message}</span>
      <button onClick={onClose} style={{ marginLeft: '20px', cursor: 'pointer' }}>X</button>
    </div>
  );
}

export default NotificationPopup