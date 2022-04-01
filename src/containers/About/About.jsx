import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'

const About = () => {
  const placeholderImg = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='
  const abouts = [
    { title: 'Backend Developer', description: 'I am a backend developer with a passion for building API endpoints and external connections.', imageUrl: placeholderImg },
    { title: 'Frontend Developer', description: 'I am a frontend developer with a passion for designing beautiful and functional web applications.', imageUrl: placeholderImg },
    { title: 'React Developer', description: 'I am a React developer who has experience with React Native and NextJS.', imageUrl: placeholderImg },
    { title: 'Web Automation', description: 'I have experience with automating web tasks via Selenium automation.', imageUrl: placeholderImg },
    { title: 'MERN Stack', description: 'I have experience building MERN applications.', imageUrl: placeholderImg },
  ]
  return (
    <>
      <h2 className='head-text'></h2>

      <div className='app_profiles'>
        {abouts.map((about, index) => {
          return (
            <motion.div className='app_profile-card' key={about.title + index} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'spring' }}>
              <img src={about.imageUrl} alt={about.title} />
              <h2 className='bold-text'>{about.title}</h2>
              <p className='p-text'>{about.description}</p>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

export default About