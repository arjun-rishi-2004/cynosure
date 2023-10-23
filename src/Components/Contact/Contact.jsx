import React from 'react';
import './Contact.css';
import KiteLogo from "./images/KiTE Logo copy.png"


export default function Contact() {
  return (

    <div className="Contact" id='contact'>
      
      <div className="contact-content">
        <img  className="kiteLogo" src={KiteLogo} alt="" />
        <h1>Kgisl Institute Of Technology</h1>
        <h1>Contact Us</h1>
        <div className="social-links">
          <a href="https://www.facebook.com/KiTETechCollege" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="Facebook" />
          </a>
          <a href="https://x.com/KiTETechCollege?t=EjzsWrsX4BvNp5z5g16IZA&s=08 " target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/6422/6422210.png" alt="Twitter" />
          </a>
          <a href="mailto:kitecynosure@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/128/3916/3916611.png" alt="Email" />
          </a>
          <a href="https://www.youtube.com/@kitetechcollege" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/6422/6422215.png" alt="YouTube" />
          </a>
        </div>
        <div className="ias-chairman-address">
          <h2>KGisl Address</h2>
          <p>
            KGiSL Campus, 365,<br />
            Thudiyalur Road, <br />
            Saravanampatti,<br />
            Coimbatore – 35.
          </p>
        </div>
        
      </div>
    </div>

   
  );
}
