import IconButton from '@mui/material/IconButton';
import React from 'react';
import { headerItem } from '../data/menudata';


export default function HeaderMenuItems({items}) {
  return (
    <div>{ items.map((value)=> {

        return(<>
          <IconButton size="large" aria-label={value.helpText} color="inherit">
             {value.child}
            </IconButton>
        
        </>)
    })
        
        }</div>
  )
}
