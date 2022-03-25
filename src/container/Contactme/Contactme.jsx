import React from 'react'
import './Contactme.css'
import { FaEnvelope, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaHackerrank, FaGithub } from "react-icons/fa";
import { Link, BrowserRouter } from 'react-router-dom';


const Contactme = () => {
  return (
    <div className='portfolio_contactme'>
      <div className='portfolio_contactme_heading'>
        <h1>
          Interested? Let's Talk :)
        </h1>
        <div className='contactme_info'>
          If You liked my profile and want to connect with me then you can drop a message here or else you can contact me through email or social media.
        </div>
      </div>

      <div className='portfolio_contactme-form'>
        <form action="#">
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Your Email Address' required />
          <textarea name="message" id="message" cols="30" rows="5" placeholder='Your message'></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className='contactme-socialmedia'>
        <BrowserRouter>

          <Link to="mailto: jatinkhurana2410@gmail.com" target="_blank">
            <FaEnvelope className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>

          <Link to="https://www.linkedin.com/in/mrkhurrana-jk">
            <FaLinkedinIn className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>
          <Link to="https://github.com/mrkhurrana-jk">
            <FaGithub className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>
          <Link to="https://www.hackerrank.com/mrkhurrana">
            <FaHackerrank className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>
          <Link to="https://t.me/mrkhurrana_jk">
            <FaWhatsapp className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>
          <Link to="https://t.me/mrkhurrana_jk">
            <FaTelegramPlane className='contactme-icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
          </Link>
        </BrowserRouter>

      </div>

      <p>
      {/* <footer>made with ❤️ by Jatin Kumar Khurana</footer> */}
      <footer>Copyright @Jatin2022</footer>
      </p>
    </div>
  )
}


export default Contactme