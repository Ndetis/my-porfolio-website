import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>-2 Years Working </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 5+ Worldwide </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ developed </small>
            </article>
          </div>
          <p>
          I am a creative and motivated individual with outstanding communication and problem-solving skills. I have demonstrated success in analyzing complex issues and developing successful solutions. 
Through my experience in software development, project management, and communications roles, I bring a diverse set of techniques to the workplace that help increase efficiency and drive results.
 Additionally, I am experienced in working independently as well as part of a team to fulfill tasks on time and demonstrate strong attention to detail with exceptional organizational abilities.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about