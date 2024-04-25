import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ForestsContextProvider } from './context/ForestContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ForestsContextProvider>
        <App />
      </ForestsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

