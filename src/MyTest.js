import React, { useRef } from 'react'

export default function MyTest() {

   const re =  useRef();
   console.log("ad");
    const myhandler = ()=> {

        console.log(re.current.value);
    }
  return (
    <div>

        <input type="text"   ref={re}/>

        <input type="button"  value="save" onClick={myhandler}/>

    </div>
  )
}
