import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="profile-img-container"><img src={profile_img} alt="" /></div>
        <h1><span>I'm Ailmel Clemente, </span>an aspiring Front-End Developer</h1>
        <p>Innovative and detail-oriented UI/UX Engineer and Front-End Developer with over 16 years of experience designing and implementing intuitive user interfaces and electronic forms. Strong expertise in HTML, CSS, JavaScript, and UI/UX best practices, with expertise in modular application development, accessibility, and performance optimization. Strong advocate for AI-assisted development and workflow automation.  Adept at problem-solving, automation, and enhancing user experiences across web-based applications. Passionate about crafting refined digital experiences for global audiences.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me!</div>
            <div className="hero-cv">My CV</div>
        </div>
    </div>
  )
}

export default Hero