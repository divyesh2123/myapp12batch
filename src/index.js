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
import DynamicNoramal from './DynamicNoramal';
import ShowMoreInfo from './ShowMoreInfo';
import MYFormCD from './MYFormCD';
import UserData from './UserData';
import Header  from './components/Header';
import {Provider}  from 'react-redux'
import store from './store/store'
import CounterNew from './CounterNew';
import UserAPI from './UserAPI';
import ProductInfo from './ProductInfo';
import CounterSaga from './CounterSaga';
import { BrowserRouter } from "react-router-dom";
import FileData from './FileData';
import FullFormFunction from './FullFormFunction';

import VideoPlayer from './VideoPlayer';
import GridExample from './GridExample';
import CustomHook from './customhook/CustomHook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
   <Provider store={store}>


   <App/>
  
   
   </Provider>

   </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
