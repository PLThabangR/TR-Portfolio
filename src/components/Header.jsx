import React from 'react'
import { Link }  from 'react-router-dom'
const Header = () => {
  return (
    <div>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-gray py-3">
        <div className="container px-5">
            <a className="navbar-brand"><span className="fw-bolder text-primary">TR Software development</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <Link to="/">
                    <li className="nav-item"><a className="nav-link text-primary" >Home</a></li>
                    </Link>
                    <Link to="/resume">
                    <li className="nav-item"><a className="nav-link text-primary" >Resume</a></li>
                    </Link>
                    <Link to="/projects">
                    <li className="nav-item"><a className="nav-link text-primary" >Projects</a></li>
                    </Link>
                    <Link to="/contact">
                    <li className="nav-item"><a className="nav-link text-primary" >Skills</a></li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
    
    
    </div>
  )
}

export default Header