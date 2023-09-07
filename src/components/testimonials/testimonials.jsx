import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpeg'
import AVATAR2 from '../../assets/avatar2.jpeg'
import AVATAR3 from '../../assets/avatar3.jpeg'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name : "AfricApps Digital Service",
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam, nesciunt accusantium expedita quasi ad nulla. Quasi incidunt officiis exercitationem?"
  },
  {
    avatar: AVATAR2,
    name : "Gaius Libam",
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam, nesciunt accusantium expedita quasi ad nulla. Quasi incidunt officiis exercitationem?"
  },
  {
    avatar: AVATAR3,
    name : "Noeli",
    review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam, nesciunt accusantium expedita quasi ad nulla. Quasi incidunt officiis exercitationem?"
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review  from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
        
        className="container container__testimonials"
      >
      {
        data.map(({avatar,name,review}, index) =>{
          return (
          <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default testimonials