import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import {Webmenu} from '../data/menudata';
import ProfileMenuItem from './ProfileMenuItem';
export default function ProfileMenuItems(handleMenuClose) {
  return (
    <>{

        Webmenu.map((value,index)=> {

            return (<ProfileMenuItem name={value} handleMenuClose={handleMenuClose}></ProfileMenuItem>)
        })
    }
    </>
  )
}
