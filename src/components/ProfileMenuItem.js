import React from 'react'
import MenuItem from '@mui/material/MenuItem';

export default function ProfileMenuItem({name,handleMenuClose}) {
  return (
    <MenuItem onClick={handleMenuClose}>{name}</MenuItem>
  )
}
