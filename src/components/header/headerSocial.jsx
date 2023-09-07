import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaStackOverflow} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nyobe-djob-1a07a5221" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Ndetis" target='_blank'><FaGithub/></a>
        <a href="https://stackexchange.com/users/25135207/ndetis-elie" target='_blank'><FaStackOverflow/></a>
    </div>
  )
}

export default headerSocial