import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
const token = localStorage.getItem('token')

axios.defaults.headers.common['Authorization'] = token;
axios.defaults.baseURL = 'https://855a-84-54-90-146.eu.ngrok.io/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
