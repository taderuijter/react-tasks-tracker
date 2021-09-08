// Adding polyfill for old browsers
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Adds react to the file
import React from 'react';
import ReactDOM from 'react-dom';

// Global SCSS styles for the app
import './scss/style.scss';

// Main Component for the app
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
