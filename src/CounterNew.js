import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slices/counterslice';


export default function CounterNew() {

    const counter = useSelector(y=>y.counter)

   const disData = useDispatch();

   const incre = ()=> {

    disData(increment())
   }

   const decre = ()=> {

    disData(decrement())
   }

  return (
    <div>
        {counter.count}
        <button onClick={incre}> +</button>
        <button onClick={decre}>-</button>
    </div>
  )
}
