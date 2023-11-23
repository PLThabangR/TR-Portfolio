import React from 'react'
import cvprofile from '../assets/cvprofile.png';
import quickcv from '../assets/quickcv.png';
import imageGen from '../assets/imageGen.png'
import aisum from '../assets/aisum.png';
import pass from '../assets/pass.png';
import estate from '../assets/estatee.png';
import gitf from '../assets/gitf.png';;
import { Link }  from 'react-router-dom'
const Project = () => {
  return (
    <>
    <div className="py-5">
    <div className="container px-5 mb-5">
        <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
             
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                    <img className="img-fluid" src={quickcv} alt="project1" />
                        <div className="d-flex align-items-center">
                            <div className="p-3">
                                <h2 className="fw-bolder">Quick CV</h2>
                                <p>This is a angular application which allows user to build their cv's quickly .The app only allows user to enter their details then select a template and a color therefore the app will take of the rest by printing the cv to pdf. This app uses data binding and the user fills the data they see the live update.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
                <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
                    <div className="card-body p-0">
                    <img className="img-fluid" src={cvprofile} alt="..." />
                        <div className="d-flex align-items-center">
                            <div className="p-3">
                                <h2 className="fw-bolder">MY PROFILE(ANGULAR 7 APP) </h2>
                                <p>A web app which show my full details
                                ,developed after my internship at Digital
                                Academy</p>
                                <a href="https://my-profile-96530.firebaseapp.com/bio">https://my-profile-96530.firebaseapp.com/bio</a>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
               
                <div className="card-body p-0">
                <img className="img-fluid" src={imageGen} alt="..." />
                    <div className="d-flex align-items-center">
                        <div className="p-3">
                            <h2 className="fw-bolder">Image generator</h2>
                            <p>This is a MERN stack app ,it use
            React+Vite in the frontend .This app
                            interact with OpenAI to generate images
                            for users, then shares with community</p>
                            <a href="https://fancy-genie-018c5c.netlify.app/">https://fancy-genie-018c5c.netlify.app/</a>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
            <div className="card-body p-0">
            <img className="img-fluid" src={aisum} alt="..." />
                <div className="d-flex align-items-center">
                    <div className="p-3">
                        <h2 className="fw-bolder">AI BLOG SUMMARIZER</h2>
                        <p>A web app that use Open AI to wrap up a
                        URL to a specified short length. It
                        condenses a long article to main points. It
                        is useful for students and news media
                        companies</p>
                        <a href="https://gorgeous-travesseiro-caf808.netlify.app/">https://gorgeous-travesseiro-caf808.netlify.app/</a>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
        <div className="card-body p-0">
        <img className="img-fluid" src={pass} alt="..." />
            <div className="d-flex align-items-center">
                <div className="p-5">
                    <h2 className="fw-bolder">Password generator</h2>
                    <p>A custom  angular web app that assists users to
                    create secured passwords
                    </p>
                    <a href="https://password-generator-a2esnt3ct-plthabangr.vercel.app/">https://password-generator-a2esnt3ct-plthabangr.vercel.app/</a>
                </div>
               
            </div>
        </div>
    </div>

    <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
    <div className="card-body p-0">
    <img className="img-fluid" src={gitf} alt="..." />
        <div className="d-flex align-items-center">
            <div className="p-5">
                <h2 className="fw-bolder">GitHub finder</h2>
                <p>A Web app that interact with a third party
                GitHub Api to fetch GitHub users .It also
                helps to search users from GitHub by names.
                
                </p>
                <a href="https://gitapifinder099865432.netlify.app/">https://gitapifinder099865432.netlify.app/</a>
            </div>
           
        </div>
    </div>
</div>
    <div className="card overflow-hidden shadow rounded-4 border-0  mb-5">
    <div className="card-body p-0">
    <img className="img-fluid" src={estate} alt="..." />
        <div className="d-flex align-items-center">
            <div className="p-5">
                <h2 className="fw-bolder">TR Housing</h2>
                <p>A web app which helps buyers and sellers to buy and to sell houses currently still under development</p>
            </div>
           
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div>
<section className="py-5 bg-gradient-primary-to-secondary text-white">
<div className="container px-5 my-5">
    <div className="text-center">
        <h2 className="display-4 fw-bolder mb-4">Lets build something together</h2>
        <Link to="/contact">
        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">See my Skills</a>
        </Link>
    </div>
</div>
</section>
    
    </>
  )
}

export default Project