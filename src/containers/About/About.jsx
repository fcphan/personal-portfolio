import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className='head-text' style={{ marginTop: 50 }}>Learning never ends.</h2>

      <div className='app_profiles'>
        {abouts.map((about, index) => {
          return (
            <motion.div className='app_profile-card' key={about.title + index} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'spring' }}>
              <img src={urlFor(about.image)} alt={about.title} />
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