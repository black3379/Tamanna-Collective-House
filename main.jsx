import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './App.jsx'; // Import the main App component

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
