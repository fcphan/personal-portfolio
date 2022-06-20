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
        <h1 className='app_navbar-logo' alt='logo'>FP</h1>
      </div>
      <ul className='app_navbar-links'>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
          return (
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className='app_flex p-text' key={`link=${item}`}>
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          )
        })}
      </ul>
      <div className='app_navbar-menu'>
        <HiMenu onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 1, ease: 'easeOut' }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
                  return (
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className='app_flex p-text' key={`sm-link=${item}`}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </motion.li>
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