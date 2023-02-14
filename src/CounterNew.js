import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Increment,Decrement} from './action/counteraction'

export default function CounterNew() {

    const counter = useSelector(y=>y.counter)

   const disData = useDispatch();

   const incre = ()=> {

    disData(Increment())
   }

   const decre = ()=> {

    disData(Decrement())
   }

  return (
    <div>
        {counter}
        <button onClick={incre}> +</button>
        <button onClick={decre}>-</button>
    </div>
  )
}
