import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ForestsContextProvider } from './context/ForestContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ForestsContextProvider>
      <App />
    </ForestsContextProvider>
  </React.StrictMode>
);

