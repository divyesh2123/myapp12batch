import React from 'react'

export default function TableHeader(props) {
  let d = ()=> {

    return Object.keys(props?.item[0]).map((value)=> {

      return(<th>{value.toUpperCase()}</th>)
      
          })

  } 

      
  return (
    <tr>
        {
          props?.item.length >=1? d() : ""
        }

    </tr>
  )
}
