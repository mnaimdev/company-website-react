import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Authorization']='Bearer ' + localStorage.getItem("token");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
