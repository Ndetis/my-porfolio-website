import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
          {/*Back end experience*/}
        <div className="experience__backtend">
          <h3>Backendend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Spring Boot</h4>
              <small className='text-light'>Experience</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Flask</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience