import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "skills"]'

    client.fetch(query).then((data) => setSkills(data))
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills</h2>
      <p className='p-text'>
        Throughout the course of my education and work, I have developed skills in the following:
      </p>

      <div className='app_skills-container'>
        <motion.div className='app_skills-list'>
          {skills.map((skill, index) => {
            return (
              <motion.div className='app_skills-item' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.3 }} key={index + '-' + skill.name}>
                <div className='app_flex' style={{}}>
                  <img src={urlFor(skill.image)} alt={skill.alt} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </>
  )
}

export default Skills