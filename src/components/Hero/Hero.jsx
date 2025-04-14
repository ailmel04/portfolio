import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="profile-img-container"><img src={profile_img} alt="" /></div>
        <h1><span>I'm Ailmel Clemente, </span>an aspiring Front-End Developer</h1>
        <p>Innovative and detail-oriented UI/UX Engineer and Front-End Developer with over 16 years of experience designing and implementing intuitive user interfaces and electronic forms. Strong expertise in HTML, CSS, JavaScript, and UI/UX best practices, with expertise in modular application development, accessibility, and performance optimization. Strong advocate for AI-assisted development and workflow automation.  Adept at problem-solving, automation, and enhancing user experiences across web-based applications. Passionate about crafting refined digital experiences for global audiences.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me!</AnchorLink></div>
            {/* <div className="hero-cv">My CV</div> */}
        </div>
    </div>
  )
}

export default Hero