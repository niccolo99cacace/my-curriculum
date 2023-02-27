import React from 'react';
import { contact } from '../../portfolio'
import './Contact.css'


const Contact = () => {
  if (!contact.email) return null

  const handleCopyClick = () => {
    navigator.clipboard.writeText(contact.email)
      .then(() => {
        alert(`Copied to clipboard: ${contact.email}`)
      })
      .catch((err) => {
        console.error(`Error copying to clipboard: ${err}`)
      })
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
        <span type='button' className='btn btn--outline' onClick={handleCopyClick}>
          Email me
        </span>
      <h6 id='email'>niccolo99cacace@gmail.com</h6>
    </section>
  )
}

export default Contact
