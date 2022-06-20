import React from 'react'
import { motion } from 'framer-motion'
import { NavWrap } from '../../components'
import './Header.scss'

const Header = () => {
  return (
    <div className='app_header app_flex'>
      <motion.div className='app_header-info' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <div className='app_header-badge'>
          <div className='badge-cmp app_flex'>
            <div style={{ marginLeft: 20 }}>
              <span>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Francis Phan</h1>
              </span>
            </div>
          </div>
          <div className='tag-cmp app_flex'>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>I am a Software Engineer and Full Stack Developer.</p>
              <br />
              <p className='p-text'>Thanks for visiting my site and checking me out. Hopefully you'll enjoy learning interesting things about me.</p>
              <br />
              <p className='p-text'>Feel free to take a look around.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NavWrap('Home', Header, 'app_home')