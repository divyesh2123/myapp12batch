import React, { useState } from 'react'

export default function MyCounter() {
 

   let [count,setCount]  = useState(0)
    const mycounter = ()=> {

       //setCount(count+1);


       count = count+1;
       alert(count);
    }
  return (
    <div>{count}
        <button onClick={mycounter}>Increment</button>
    </div>
  )
}
