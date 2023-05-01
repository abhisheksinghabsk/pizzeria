import React from 'react';
import "../styles/Footer.css";
import{FaFacebookSquare, FaInstagramSquare,FaGithubSquare, FaTwitterSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <FaInstagramSquare/>
            <FaFacebookSquare/>
            <FaTwitterSquare/>
            <FaGithubSquare/>
        </div>
        <p>© 1996-2022 Pizzeria. All Rights Reserved.</p>

    </div>
  )
}

export default Footer;