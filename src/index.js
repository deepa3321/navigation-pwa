// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {serviceWorkerRegistration} from './serviceWorkerRegistration';
import { registerServiceWorker } from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker.register();
