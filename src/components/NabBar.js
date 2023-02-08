import React from 'react'
import NabBarItems from './NabBarItems'

export default function NabBar(props) {
  return (
    <>
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
    >
      

      <NabBarItems/>
    </Menu>
    
    
    </>
  )
}
