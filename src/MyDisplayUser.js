import React, { useEffect, useState } from 'react'

export default function MyDisplayUser() {

 const [data,setData] =  useState([])

   

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users").
        then(y=>y.json())
        .then(y=> {
    
           
        setData(y)
        })

    },[])

    const deleteData =(index)=> {

      let d = [...data];

      d.splice(index,1)
        setData(d);
    }
  return (
    <div>
        {
            data.map((element,index)=> {

                return(<div>{element.name}
                
      <button onClick={()=> {deleteData(index)}}>Delete</button>
                </div>)
            })
        }
    </div>
  )
}
