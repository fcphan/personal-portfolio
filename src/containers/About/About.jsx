import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { NavWrap } from '../../components'
import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className='head-text' style={{ marginTop: 50 }}>The pursuit of knowledge is endless. Learning never ends.</h2>

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

      <div className='app_profile-info'>
        <h2 className='head-text' style={{ marginTop: 50 }}>A little bit about me...</h2>
        <div className='tag-cmp'>
          <p className='p-text'>I graduated from Portland State University in August 2021 with a B.S. in Computer Science.</p>
          <br />
          <p className='p-text'>
            I am currently looking for a full-time position working as a Software Developer.
            I have interests in various aspects of programming, with a heavier focus on full-stack development and databases.
            I enjoy learning new technologies and implementing them in simple pet projects in order to gain a greater understanding of the technology.
            When I am unclear about anything, I am willing to reach out and ask those who are more knowledgeable on the subject,
            though I will definitely put in the effort to discover solutions on my own first.
          </p>
        </div>
      </div>
    </>
  )
}

export default NavWrap('About', About, 'app_about')