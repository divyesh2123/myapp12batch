import React from 'react'

export default function Item({mydata,remove,index}) {
  return (
    <tr><td>{mydata}</td><td><button onClick={()=> {remove(index)}}>Delete</button></td><td><button>Edit</button></td></tr>
  )
}
