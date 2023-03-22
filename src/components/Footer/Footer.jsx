import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='footerWrapper'>
      <div className='footer'>
        <div className='leftConteiner'>
          <div className="logoFooter">
            <Link to="/">
              EWB REAL ESTATE
            </Link>
          </div>
          <div className="socialMediaIconsFooter">
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://pt-br.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com">
              <LinkedInIcon />
            </a>
          </div>
          <div className="phoneFooter">
            <LocalPhoneIcon />
            <p>(51) 98765-4321</p>
          </div>
        </div>
        <div className='centerConteiner'>
          <div className="footerInfo">
            <div>
              <h3>ADDRESS</h3>
              <p>Rua Nome da Rua, 123 Centro, Cidade - RS
              </p>
            </div>
            <div>
              <h3>OPENING HOURS</h3>
              <div className='flex flex-jc-sb'>
                <div >
                  <p>Monday to Friday</p>
                  <p>Saturday</p>
                </div>
                <div>
                  <p>09:00 to 18:00</p>
                  <p>09:00 to 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='rightConteiner'>
          <div className="footerLinks">
            <h3>NAVIGATION</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/properties">Properties</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottonConteiner">
        <p>Copyright 2023 © <strong>EWB REAL STATE</strong> - Developed by: <strong>Elizeu Walker Brizolla</strong></p>
      </div>
    </footer>
  )
}

export default Footer