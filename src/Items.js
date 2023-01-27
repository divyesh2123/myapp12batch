import React, { useState } from 'react'
import Item from './Item';

export default function Items() {
const [item,setitem] =  useState([]);
const [input,setinput] = useState('');

const myInputhandler = (e)=> {

  setinput(e.target.value);
}
const myDelete  = (index)=> {


  let mydat = [...item];
  mydat.splice(index,1);
  setitem(mydat);
  
}

const saveItem =()=> {

  let myItems = [...item];
  myItems.push(input);
  setitem(myItems);

}

  return (
    <div>
      <input type="text" value={input} onChange={myInputhandler} />
      <input type="button" value="save" onClick={saveItem} />
    
      {
        item.map((ele,i)=> {

          return(<Item mydata={ele}
             remove = {myDelete} index ={i}></Item>)
        })

      }

    </div>
  )
}
