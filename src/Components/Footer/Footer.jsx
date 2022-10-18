import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook className='icon' />
        <FaInstagram className='icon' />
        <FaTwitter className='icon' />
        <FaLinkedinIn className='icon' />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Détails</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Détails</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <p>Company</p>
          <p>Détails</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Informations</h3>
          <p>Company</p>
          <p>Détails</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
