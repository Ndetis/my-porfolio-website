import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eyoyyn8', 'template_eju9ypk', form.current, 'rDF5okAXSaUI35OKA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset() 
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon' />
            <h4>Email</h4>
            <h5>nyobedjobelie@gmail.com</h5>
            <a href="mailto:nyobedjobelie@gmail.com" target='_blank'>Send a Mail</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>nyobe-djob</h5>
            <a href="https://www.linkedin.com/in.me/nyobe-djob-1a07a5221" target='_blank'>Message Me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon' />
            <h4>Email</h4>
            <h5>+237 6 90 76 88 32</h5>
            <a href="https://api.whatsapp.com/send?phone=237690768832" target='_blank'>Send a Mail</a>
          </article>
        </div>
        {/* END OF ACTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your name here ' required/>
          <input type="email" name='email' placeholder='enter your Mail ' required/>
          <textarea type="text" name='message' placeholder='your message' rows='7' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact