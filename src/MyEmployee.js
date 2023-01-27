import React, { useEffect, useState } from 'react'
import Employee from './Employee';

export default function MyEmployee() {

  const [data,setData] = useState([]);

  useEffect( ()=> {

    fetch("https://fakestoreapi.com/products").
    then(y=>y.json())
    .then(y=> {
      setData(y)
    })

  },[])
  return (
    <div>
      <Employee items={data} index="1"></Employee>
    </div>
  )
}
