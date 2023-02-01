import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import MyCounter from './MyCounter';
import MyDisplay from './MyDisplay';
import MyDisplayUser from './MyDisplayUser';
import MySearch from './MySearch';
import MyEmployee from './MyEmployee';
import Albums from './Albums';
import Items from './Items';
import MyUser from './MyUser';
import AlbumsData from './AlbumsData';
import Registration from './Registration';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import Accounts from './Accounts';
import MyCrud from './MyCrud';
import BasicForm from './BasicForm';
import DynamicNoramal from './DynamicNoramal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <DynamicNoramal/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
