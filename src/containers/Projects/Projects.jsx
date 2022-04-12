import React, { useState, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { NavWrap } from '../../components'
import './Projects.scss'

const Projects = () => {
  const [container, setContainer] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = '*[_type == "projects"]'

    client.fetch(query).then((data) => setProjects(data))
  }, []);

  return (
    <>
      <h2 className='head-text'>My Collection of Projects</h2>

      <motion.div className='app_projects-portfolio' animate={container} transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {projects.map((project, index) => {
          return (
            <div className='app_projects-item app_flex' key={index}>
              <div className='app_projects-img app_flex'>
                <img src={urlFor(project.image)} alt={project.alt} />
                <motion.div className='app_projects-hover' whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <motion.div className="app_flex" whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }}>
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='app_projects-content'>
                <h4 className='bold-text'>{project.title}</h4>
                <p className='p-text'>{project.description}</p>
              </div>
            </div>
          )
        })}
      </motion.div>
    </>
  )
}

export default NavWrap('Projects', Projects, 'app_projects')