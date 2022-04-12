import React, { useState, useEffect } from 'react'
import { urlFor, client } from './../../client'
import { NavWrap } from '../../components'
import './Footer.scss'

const Footer = () => {
  const [icons, setIcons] = useState([])
  useEffect(() => {
    const query = '*[_type == "images"]'

    client.fetch(query).then((data) => setIcons(data))
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const sendMessage = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Contact Me</h2>
      <div className='app_footer-cards'>
        <div className='app_footer-card'>
          {icons.map((icon) => {
            return (
              <img src={urlFor(icon.image)} alt='email' />
            )
          })}
          <a href='mailto:francis.c.phan@gmail.com' className='p-text'>francis.c.phan@gmail.com</a>
        </div>
      </div>

      {!isSubmitted ?
        <div className='app_footer-forum app_flex'>
          <div className='app_flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleInput} />
          </div>
          <div className='app_flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' name='message' value={message} onChange={handleInput} />
          </div>
          <button className='p-text' type='button' onClick={sendMessage}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div className='app_flex'>
          <h3 className='head-text'>Thank you for reaching out!</h3>
        </div>}
    </>
  )
}

export default NavWrap('Contact', Footer, 'app_footer')