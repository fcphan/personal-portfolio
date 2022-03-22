import React from 'react'
import { useState } from 'react'
import './Navbar.scss'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app_navbar'>
      <div>
        <img className='app_navbar-logo' src='https://cdn.betterttv.net/emote/5d63e543375afb1da9a68a5a/2x' alt='logo' />
      </div>
      <ul className='app_navbar-links'>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
          return (
            <li className='app_flex p-text' key={`link=${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        })}
      </ul>
      <div className='app_navbar-menu'>
        <HiMenu onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
                  return (
                    <li className='app_flex p-text' key={`sm-link=${item}`}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar