import React from 'react'
import Inq from './Inq';

export default function AppointmentDisplay({item}) {
  return (
    <div>
        <header></header>
        <Inq items={item}/>
        <footer></footer>
    </div>
  )
}
