import React, { useState } from 'react'
import AppointmentDisplay from './AppointmentDisplay'

export default function Appointment() {
  const [data,setData] =   useState({
    firstName : "Test",
    lastName : "Test1"
  })
  return (
    <div>
      <AppointmentDisplay item={data}/>
    </div>
  )
}
