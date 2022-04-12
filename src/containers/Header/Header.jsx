import React from 'react'
import { motion } from 'framer-motion'
import { NavWrap } from '../../components'
import './Header.scss'

const Header = () => {
  return (
    <div className='app_header app_flex'>
      <motion.div className='app_header-info' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <div className='app_header-badge'>
          <div className='badge-cmp app_flex'>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Francis</h1>
            </div>
          </div>
          <div className='tag-cmp app_flex'>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Software Engineer</p>
              <br />
              <p className='p-text'>Web developer</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className='app_header-img' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 1 }}>
        <img src='https://cdn.betterttv.net/emote/5d63e543375afb1da9a68a5a/3x' alt='profile' />
      </motion.div>
    </div>
  )
}

export default NavWrap('Home', Header, 'app_home')