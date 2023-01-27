import axios from 'axios';

let myToken = JSON.parse(localStorage.getItem("user"));
const authFetch = axios.create({
  baseURL: 'https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : `Bearer ${myToken.data.jwtToken}`
  },
});

export default authFetch;


