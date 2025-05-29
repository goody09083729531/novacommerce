import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/navlogo1.png';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';
import mail_icon from '../Assets/mail_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>NOVA</p>
        </div>
        <ul className="footer-links">
            <li>Shoes</li>
            <li>Mobilities</li>
            <li>Furnitures</li>
            <li>Mowers</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img style={{ paddingTop: '3px' }} src={mail_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer