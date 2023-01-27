import React, { useState } from 'react'
import MyData1 from './MyData'

export default function MyDisplay() {
  const [data,setData]  = useState(MyData1)

  const clearData = ()=> {
    setData([])
  }
  return (
    <div>{data.map((value,index,array)=> {

        return(<div>{value.employeeId} {value.employeeName}
                <img src={value.image}/>
        </div>)

        
    })}
    <button onClick={clearData}>Clear</button>
    </div>
  )
}
