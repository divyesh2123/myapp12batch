import React, { useRef } from 'react'
import './index.css';
import Video from './video/video.mp4';

export default function VideoPlayer() {


  const myButton =  useRef();
  const myVideo = useRef();

  const myData = ()=> {
    if (!myButton.current.classList.contains("slide")) {
     
        myButton.current.classList.add("slide");
        myVideo.current.pause();
      } else {
        myButton.current.classList.remove("slide");
        myVideo.current.play();
      }

      
  }


  return (
    <header>
    <video ref={myVideo}  
    className="video-container">
      <source src={Video} type="video/mp4" />
     
    </video>
    <h1>video project</h1>
   
    <button class="switch-btn" ref={myButton} onClick={myData}>
      <span>
        play
      </span>
      <span>
        pause
      </span>
      <span class="switch"></span>
    </button>
  </header>
  )
}
