import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/AC.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Innovative and detail-oriented UI/UX Engineer and Front-End Developer with over 16 years of experience </p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Ailmel Clemente. All Rights Reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me!</p>
            </div>
        </div>
    </div>
  )
}

export default Footer