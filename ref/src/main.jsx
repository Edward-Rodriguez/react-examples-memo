import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App from '../src/challenge3/App.jsx';
import './challenge3/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/**
 * Challenge 2 of 4: Focus the search field 
Make it so that clicking the “Search” button puts focus into the field.
 */
