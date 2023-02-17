import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './slices/postslice';

export default function PostList() {

  let data =   useSelector(y=>y.posts);

  let mydis =  useDispatch();

  useEffect(()=> {

    mydis(getPosts({ userId: 1 }));

  },[])


  console.log(data);

  return (
    <div>PostList</div>
  )
}
