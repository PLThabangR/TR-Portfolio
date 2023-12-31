import React from 'react'

import Images from './Images';
import { Link }  from 'react-router-dom'

const Index = () => {
  return (
    <div>
    <header className="py-5">
    <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
               
                <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Frontend &middot;Cloud &middot; Python</div></div>
                    <div className="fs-3 fw-light text-muted">I can help your business to</div>
                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <Link to="/resume">
                        <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Resume</a>
                        </Link>
                        <Link to="/projects">
                        <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
         <hr/>
         <Images/>
        </div>
    </div>
</header>
<section className="bg-light py-5">
<div className="container px-5">
    <div className="row gx-5 justify-content-center">
        <div className="col-xxl-8">
            <div className="text-center my-5">
                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                <p className="lead fw-light mb-4">My name is Thabang Rakgoropo born in 17 June 1993,I am a Frontend Developer with demonstrated Programming experience in developing various Applications. I help brands grow in Web development. </p>
                <p className="lead fw-light mb-4"> I have great aspiration of becoming a DevOps Developer, recently I completed Cloud and Agile Certifications from IBM.</p>
                <p className="text-muted">I work with Client side and Server side Programming which includes Java, SQL or any other Javascript
                frameworks .Currently working with Typescript frameworks such as Angular, React & Node js
                </p>
                
                <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="https://www.hackerrank.com/profile/rakgoropothaban1">Hackerrank</a>
                    <a className="text-gradient" href="https://www.linkedin.com/in/thabang-rakgoropo-98a635124/"><i className="bi bi-linkedin"></i></a>
                    <a className="text-gradient" href="https://github.com/PLThabangR"><i className="bi bi-github"></i></a>
          
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    
    </div>
  )
}

export default Index