import React, { useState } from 'react'
import MyData from './MyData'

export default function MySearch() {

   const [data,setData] = useState(MyData);

   const [te,setInput] = useState('');

   const myhandler = (e)=> {
   
    setInput(e.target.value);
    console.log(te);
   }
  return (
    <div>
        <input type="text" name='d' value={te} onChange={myhandler}/>
        {
            data.filter((value)=> {
                return value.employeeName.indexOf(te) >=0;
            }).map((element)=> {

                return(<div>{element.employeeName}</div>)
            })
        }
    
    </div>
  )
}
