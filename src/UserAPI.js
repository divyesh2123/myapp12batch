import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {GetUserData } from './action/UserAction'

export default function UserAPI() {

    const user = useSelector(y=>y.user);


    const disData = useDispatch();

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/users").then(y=>y.json())
        .then(y=> {

            disData(GetUserData(y));
        })


    },[])

  return (
    <div>{
        user.map((el)=> {

         return (<div>{el.username}</div>)

        })
        }</div>
  )
}
