import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Make sure this is imported

import './index.css';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App */}
      <App1 />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
