import React from 'react';
import logo from '../images/logo-white.svg';
import iconFacebook from '../images/icons-facebook.svg';
import iconLinkedin from '../images/icons-linkedin.svg';
import iconTwitter from '../images/icons-twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>

    <div className="app-footer">

      <div>
        <img className="logo" src={logo} alt="voicer" />
      </div>

      <div>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">News</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Newsroom</Link>
      </div>

      <div>
        <Link to="/">Help</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Talent Help</Link>
        <Link to="/">Client Help</Link>
        <Link to="/">Pricing</Link>
      </div>

      <div className="social-icons">
        <a href="https://facebook.com"
          target="_new"><img src={iconFacebook} alt="Facebook" /></a>

        <a href="https://twitter.com"
          target="_new"><img src={iconTwitter} alt="Twitter" /></a>

        <a href="https://linkedin.com"
          target="_new"><img src={iconLinkedin} alt="Linkedin" /></a>
      </div>

    </div>

    <div className="credits">
        &copy; 2019 - Voicer - All right reserved
    </div>

    </footer>
  )
}

export default Footer;
