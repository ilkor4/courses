import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
