import React from 'react'
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

    </>
  )
}

export default Skills