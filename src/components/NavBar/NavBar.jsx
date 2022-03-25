import React from 'react'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className='portfolio_navbar'>
        <nav>
            <ul className="portfolio_navbar-links">
                <li> <a href="#home" className="active"> Home </a> </li>
                <li> <a href="#about"> About </a> </li>
                <li> <a href="#education"> Career </a> </li>
                {/* <li> <a href="#projects"> Projects </a> </li> */}
                <li> <a href="#certifications"> Certifications </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

