import axios from 'axios';

let myToken = JSON.parse(localStorage.getItem("user"));
//axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${myToken.data.jwtToken}`;