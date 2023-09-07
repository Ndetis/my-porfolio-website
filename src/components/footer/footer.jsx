import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {ImStackoverflow} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="" className="footer__logo">NDET</a>

      <lu className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#porfolio">porfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </lu>

      <div className="footer__socials">
        <a href="www.linkedin.com/in/nyobe-djob-1a07a5221"><BsLinkedin /></a>
        <a href="https://stackoverflow.com/users/18982055/ndetis-elie"><ImStackoverflow /></a>
        <a href="https://twitter.com/ndetis_e"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NDET Porfolio site. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer