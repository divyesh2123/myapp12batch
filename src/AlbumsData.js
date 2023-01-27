import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function AlbumsData() {

  const [data,setData] =  useState([]);

  useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(y=> {
        console.log(y);
        setData(y.data);
    })
  },[])
  return (
    <div> {
            data.map((element)=> {

      return (<div>{element.userId} {element.id} {element.title}</div>)

            })
        
        }</div>
  )
}
