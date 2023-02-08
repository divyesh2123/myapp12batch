import React from 'react'
import {navitems} from '../data/menudata'
import NavBarItem from './NavBarItem';
export default function NabBarItems() {


  return (
    <>
    {
      navitems.map((value)=> {

        return(<NavBarItem item={value}> </NavBarItem>)
      })

    }
    
    </>
  )
}
