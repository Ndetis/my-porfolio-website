import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  },
  {
    id : 2,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  },
  {
    id : 3,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  },
  {
    id : 4,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  },
  {
    id : 5,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  },
  {
    id : 6,
    image : IMG1,
    title : "Crypto Currency DashBoard & Financial Visualisation",
    github : "https://github.com",
    demo: "nyobe-djob.com"
  }
]

const porfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Projects</h5>
      <h2>Porfolio</h2>

      <div className='container porfolio__container'>
        {
        data.map(({id, image, title,github,demo}) =>
        {
          return(
            <article key={id} className='porfolio__item'>
          <div className="porfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="porfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
        }

      </div>
    </section>
  )
}

export default porfolio