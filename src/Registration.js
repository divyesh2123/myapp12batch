import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
export default function Registration() {

  const mysele = useSelector(y=>y.regi)
 const mydis =  useDispatch()
const [data,setData] =  useState({
  title : "",
  firstName : "",
  lastName : "",
  email : "",
  password : "",
  confirmPassword : "",
  acceptTerms: false
});


const mySubmit =(e)=> {

  e.preventDefault();

  mydis({type:'START', payload: data})

  // axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",
  // data)
  // .then(y=> {
  //   if(y.status == 200 || y.status == 201)
  //   {
  //   toast("Registration!")
  //   }
  //   console.log(y);
  // }).catch(y=> {
  //   toast.error("Error")
  // })
  
}

const handler = (e)=> {

  if(e.target.type != "checkbox")
  {
  setData({...data,[e.target.name] : e.target.value});
  }
  else
  {
    setData({...data,[e.target.name] : e.target.checked});
  }
}

  return (
    <div>
      
        <form onSubmit={mySubmit} >

<TextField  id="standard-basic" label="title" variant="standard"  name="title" onChange={handler}/>

        <input type="text" onChange={handler}  name="firstName"/>
        <input type="text" onChange={handler}  name="lastName"/>
        <input type="text" placeholder='email' onChange={handler}  name="email"/>
        <input type="text" onChange={handler}  name="password"/>
        <input type="text" onChange={handler}  name="confirmPassword"/>
        <input type="checkbox" onClick={handler} name="acceptTerms" />

        <input type="submit" />
 

        </form>

    </div>
  )
}
