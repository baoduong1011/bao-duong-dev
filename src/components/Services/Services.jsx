import React, { useEffect, useState, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import Particles from "react-tsparticles";


export default function Services() {
  return (
    <section className='services' id='services'>
      <div className='main-service'>
        <h1 className='heading' ><span>My </span>Services</h1>


        <div className='box-container' >

          <div className='box' >
            <div className='main-box'>
              <i className='fas fa-code' ></i>
              <h3>web development</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

          </div>

          <div className='box' >
            <div className='main-box'>
              <i className='fas fa-paint-brush' ></i>
              <h3>graphic design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className='box' >
            <div className='main-box'>
              <i className='fas fa-bullhorn' ></i>
              <h3>graphic design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className='box' >
            <div className='main-box'>
              <i className='fas fa-envelope' ></i>
              <h3>email marketing</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className='box' >
            <div className='main-box'>
              <i class="fa-solid fa-mobile-screen-button"></i>
              <h3>responsive design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className='box' >
            <div className='main-box'>
              <i class="fa-brands fa-wordpress"></i>
              <h3>wordpress</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
