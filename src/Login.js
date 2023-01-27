import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [login,setLogin] =  useState({
    email : "",
    password : ""
  });

  const mySubmit = (e)=> {
    e.preventDefault();

    axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",login)
    .then(y=> {

        if(y.status == 200 || y.status == 201)
        {
            localStorage.setItem("user", JSON.stringify(y));
        }
        console.log(y.data);
    })

  }

  const myInput = (e)=> {

    setLogin({...login,[e.target.name] : e.target.value});
  }

  return (
    <div>
<form onSubmit={mySubmit}>

<input type="text" name="email" onChange={myInput} />
<input type="password" name="password" onChange={myInput} />  
<input type="submit" save="login" />     
</form></div>
  )
}
