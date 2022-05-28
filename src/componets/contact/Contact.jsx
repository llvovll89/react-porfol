import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaGithubAlt} from 'react-icons/fa'

function contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
          <MdOutlineMail />
            <h4>Email</h4>
            <h5>svvvs5579@naver.com</h5>
            <a href="mailto:svvvs5579@naver.com" target="_black">Send a message</a>
          </article>
          <article className="contact-option">
          <FaGithubAlt />
            <h4>Github</h4>
            <h5>llvovll89</h5>
            <a href="https://github.com/llvovll89" target="_black">Go to Github</a>
          </article>
        </div>
        <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required autoComplete='off'/>
        <input type="email" name='email' placeholder='Your Email' required autoComplete='off'/>
       <textarea name="message" rows='7' placeholder='Your Message' required ></textarea>
       <button type='submit' className='btn btn2'>Send MSG</button>
        </form>
      </div>
    </section>
  )
}

export default contact