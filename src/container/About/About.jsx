import React from 'react'
import images from '../../constants/images'
import './About.css'
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className='portfolio_about'>

        <div className='portfolio_about-heading'>
            <h1> About me </h1>
        </div>

        <div className='portfolio_about-content'>
            <div className='portfolio_about-content-img'>
                <img src={images.Jatin} alt="Jatin's Photograph" />
            </div>

            <div className='portfolio_about-content-info'>
            Hello!, I am Jatin Kumar Khurana. I'm pursuing my MBA Tech from NMIMS Navi Mumbai. I'm learning Web
            development. I know C, Python, SQL, WordPress, Bootstrap, Git & Github, R, HTML5, CSS3, JavaScript and PHP.
            I'm Interested in Cyber Security, Ethical Hacking, and Artificial Intelligence(AI).
          
            <br />
            <br />

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam dolorum nulla aspernatur omnis ea,
            iure repellendus consectetur dolores fuga debitis ad laborum, minus a ipsam amet quibusdam maiores
            voluptates cupiditate optio dignissimos nobis. Quia laboriosam, quos recusandae adipisci iusto, illo tempore

            <br />
            <br />

            <p>
            Hobbies: &nbsp; Cricket🏏, &nbsp;Photography📷, &nbsp;Travelling✈️, &nbsp;Listening Music🎶
            </p>


            <p>

            Contact Details: <br />
            <FaMobileAlt/> : &nbsp; +91 9588080257 <br /> 
            <FaRegEnvelope/> : &nbsp;  jatinkhurana2410@gmail.com <br />     
            <FaHome/> : &nbsp; Navi Mumbai, Maharashtra || Bharatpur, Rajasthan
            </p>
            </div>
        </div>

    </div>
  )
};

export default About