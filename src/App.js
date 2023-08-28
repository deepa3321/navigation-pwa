// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { registerServiceWorker, askForNotificationPermission } from './serviceWorkerRegistration';

function App() {
  const [notificationStatus, setNotificationStatus] = useState(
    'Click the button to enable notifications'
  );

  useEffect(() => {
    registerServiceWorker();
  }, []);

  const handleSubscribe = async () => {
    try {
      await askForNotificationPermission();
      setNotificationStatus('Notifications enabled');
    } catch (error) {
      console.error('Error subscribing:', error);
      setNotificationStatus('Failed to enable notifications');
    }
  };

  return (
    <div className="App">
      <h1>Push Notification PWA</h1>
      <button onClick={handleSubscribe}>Enable Notifications</button>
      <p>{notificationStatus}</p>
    </div>
  );
}

export default App;
