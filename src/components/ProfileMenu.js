import React from 'react'
import Menu from '@mui/material/Menu';
import ProfileMenuItems from './ProfileMenuItems';
export default function ProfileMenu(props) {
  return (
    
      <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={props.menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
      >
      
      <ProfileMenuItems handleMenuClose={props.handleMenuClose}/>

      </Menu>

    
  )
}
