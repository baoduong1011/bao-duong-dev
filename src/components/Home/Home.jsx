import React,{useEffect,useState} from 'react';
import Typed from "react-typed";

export default function Home() {
  
  return (
    <section className='home' id='home'>
       <div className='content' >
          <img src='images/bd.jpg' />
          <h3>Bao Duong<span> Dev</span></h3>
          <p> I am a <span className='typing-text'> <Typed
        strings={[
          "Front End Developer",
          "Back End Developer"
          
        ]}
        typeSpeed={80}
        backDelay={1100}
        backSpeed={30}
        loop
      /></span></p>
        <a href='#about' className='btn'>About Me</a>
       </div>
    </section>
  )
}
