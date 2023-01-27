import React, { useEffect, useState } from 'react'

import Album from './Album';
export default function Albums() {

 const [data,setData] = useState([]);

 useEffect(()=> {
  fetch("https://jsonplaceholder.typicode.com/photos").
    then(y=>y.json())
    .then(y=> {
      setData(y)
    })
 },[])

  return (
    <div>
      {
        data.map((value)=> {

       return ( <Album items={value}></Album>)
        })
      }

    </div>
  )
}
