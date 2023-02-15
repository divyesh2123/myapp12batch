import React from 'react';
 import  {useDispatch,useSelector} from 'react-redux';

export default function CounterSaga() {

    const counter = useSelector(uy=>uy.counter);

    const mydis = useDispatch();

    const inc = ()=> {

        mydis({type: 'INCREMENTASYNC'})
    }
  return (
    <div>{counter}
    
        <button onClick={inc}>+</button>
        <button>-</button>
    </div>
  )
}
