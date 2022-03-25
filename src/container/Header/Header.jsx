import React from 'react'
import './Header.css'
import images from '../../constants/images'
import { FaEnvelope, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaHackerrank, FaGithub } from "react-icons/fa";
import { Link, BrowserRouter } from 'react-router-dom';

const Header = () => {
    return (
        <div className='portfolio_header'>
            <div className='portfolio_header-videobg'>
                <video src={images.videobg} autoPlay loop muted></video>
            </div>

            <div className='portfolio_header-intro'>
                <p className="hey">Hello!👋🏻</p>

                <p className="heading" id="heading">
                    I'm Jatin Kumar Khurana
                </p>


                <div className="socialmedia">
                    <BrowserRouter>

                    <Link to="mailto: jatinkhurana2410@gmail.com" target="_blank">
                        <FaEnvelope className='icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
                    </Link>

                    <Link to="https://www.linkedin.com/in/mrkhurrana-jk">
                        <FaLinkedinIn className='icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
                    </Link>
                    <Link to="https://github.com/mrkhurrana-jk">
                        <FaGithub className='icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
                    </Link>
                    <Link to="https://www.hackerrank.com/mrkhurrana">
                        <FaHackerrank className='icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
                    </Link>
                    <Link to="https://t.me/mrkhurrana_jk">

                        <FaTelegramPlane className='icons' style={{ fontSize: '2.5rem', marginRight: '3rem' }} />
                    </Link>
                    </BrowserRouter>
                    {/* <a href="mailto: jatinkhurana2410@gmail.com" class="fa fa-envelope" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/mrkhurrana-jk" class="fa fa-linkedin" target="_blank"></a>
                    <a href="https://www.hackerrank.com/mrkhurrana" class="fa fa-trophy" target="_blank"></a>
                    <a href="https://github.com/mrkhurrana-jk" class="fa fa-github" target="_blank"></a>
                    <a href="https://wa.me/919588080257" class="fa fa-whatsapp" target="_blank"></a>
                <a href="https://t.me/mrkhurrana_jk" class="fa fa-telegram" target="_blank"></a> */}
                </div>
            </div>
        </div>
    )
}
export default Header