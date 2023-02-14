import React, { useEffect, useState } from 'react'
import TableHeader from './TableHeader'

export default function UserData() {

    const [data,setData] = useState([]) 

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=> {
            setData(y)
        })

    },[])
  return (
    <table>
        <TableHeader item={data}/>
    </table>
  )
}
