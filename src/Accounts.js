import authFetch from './axiosbase/interseptor';
import React, { useEffect, useState } from 'react'

export default function Accounts() {

   const [data,setData] = useState([]);

   useEffect(()=> {

    let myToken = JSON.parse(localStorage.getItem("user"));


    authFetch.p(
    "/accounts")
    .then(y=> {

            console.log(y);
    })

   },[])

  return (
    <div>Accounts</div>
  )
}
