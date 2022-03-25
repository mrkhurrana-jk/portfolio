import React from 'react'
import images from '../../constants/images'
import './Certification.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Certification = () => {
  return (
    <div className='portfolio_certification'>

      <div className='portfolio_certification-heading'>
        <h1>
          Certifications
        </h1>
      </div>

      <div className='portfolio_certificates'>
      
            <Carousel infiniteLoop showArrows stopOnHover autoPlay >
                <div>
                    <img src={images.ciscocs1} />
                </div>
                <div>
                    <img src={images.ciscocs2} />
                </div>
                <div>
                    <img src={images.pythonhr} />
                </div>
                <div>
                    <img src={images.wordpress} />
                </div>
                <div>
                    <img src={images.guvi} />
                </div>
            </Carousel>
      </div>



    </div>
  
  )
}

export default Certification