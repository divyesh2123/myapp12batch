import React from 'react';
import ImageData from './ImageData';

export default function Album({items}) {
  return (
    <div>
         {items.title}
        <ImageData url={items.thumbnailUrl}/>
    </div>
  )
}
