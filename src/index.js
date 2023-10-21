import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);
