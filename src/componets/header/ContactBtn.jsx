import React from 'react'
import Resume from '../../assets/kimgeon.pdf'

function ContactBtn() {
  return (
    <div className="contact-btn">
    <a href={Resume} className="btn">이력서보기</a>
      <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default ContactBtn