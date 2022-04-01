import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGitHub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import './Projects.scss'

const Projects = () => {
  const placeholderImg = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='

  const [container, setContainer] = useState({ y: 0, opacity: 1 });
  return (
    <>
      <h2 className='head-text'>My Collection of Projects</h2>

      <motion.div className='app_projects-portfolio' animate={container} transition={{ duration: 0.5, delayChildren: 0.5 }}>
        <div className='app_projects-item app_flex'>
          <div className='app_projects-img app_flex'>
            <img src={placeholderImg} alt='placeholder' />
            <motion.div className='app_project-hover' whileHover={{ opacity: [0, 1] }}>
              <a href='placeholder' target='_blank' rel='noreferrer' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Projects