import React from 'react'

export default function Header() {
  
  const onClickMenu = () => {
      let menu = document.querySelector('#menu-bars');
      let header = document.querySelector('header');
      menu.classList.toggle('fa-times');
      header.classList.toggle('active');
  }

  window.onscroll = () => {
    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');
      menu.classList.remove('fa-times');
      header.classList.remove('active');
  }


  return (
    <header className='header'>

        <div onClick={onClickMenu} id='menu-bars' className='fas fa-bars' ></div>

        <nav className='navbar'>
            <a href='#home' >home</a>
            <a href='#about' >About</a>
            <a href='#services' >Services</a>
        </nav>
    
    </header>
  )
}
