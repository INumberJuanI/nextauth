"use client"

import { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'

import './Navigation.css'

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (<>
    <header className='py-2'>
      <div className="container grid grid-cols-2 sm:flex justify-between">
        <Logo />
        <button 
            type='button'
            onClick={toggleNav}
            aria-expanded={navOpen}
            className={'relative w-[30px] ml-auto sm:hidden'}
        >
            <div className="hamburger"></div>
        </button>
        {navOpen? <Nav /> : <Nav className="hidden sm:flex" />}
      </div>
    </header>
    
  </>)
}

export default Navigation