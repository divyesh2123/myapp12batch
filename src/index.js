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

import Appointment from './Appointment';
import Header from './Header';
import DynamicNoramal from './DynamicNoramal';
import ShowMoreInfo from './ShowMoreInfo';
import MYFormCD from './MYFormCD';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <DynamicNoramal/> */}

    <MYFormCD/>

    {/* <ShowMoreInfo helpText="This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec"/>
    <ShowMoreInfo helpText="This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec"/>
    <ShowMoreInfo helpText="This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec This is the javascript from the weltec"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
