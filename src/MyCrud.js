import React, { useReducer, useState } from 'react'
import MyItemMemo from './MyItemMemo';

export default function MyCrud() {

const myReducer = (state,action)=> {

    console.log('state'+state);
    console.log('action'+ JSON.stringify(action));

    switch(action.type)
    {
        case "ADD" :
            let d = [...state, action.payload];
            return d;

        default :

        return state;
    }


}






const myChange = (e)=> {

    setInput(e.target.value)
}

const mySave = (e)=> {

    setData({type:"ADD",payload : myinput})
}

const myDelete = (index)=> {

}


const [myinput,setInput] = useState('');
 const [data,setData] =  useReducer(myReducer,[]);
 
 console.log(data);
 return (
    <div>
        <input type="text" onChange={myChange} value={myinput}/>
        <input type="button" value="save" onClick={mySave} />

        <MyItemMemo items={data} remove={myDelete} />

    </div>
  )
}
