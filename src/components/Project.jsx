import cvprofile from '../assets/cvprofile.png';
import quickcv from '../assets/quickcv.png';
import imageGen from '../assets/imageGen.png'
import aisum from '../assets/aisum.png';
import pass from '../assets/pass.png';
import tasks from '../assets/tasks.png';
import gitf from '../assets/gitf.png';
import fm from '../assets/fm.png'
import { Link }  from 'react-router-dom'
const Project = () => {
  return (
    <>
    <div className="py-2 flex-wrap">
    <div className="container px-5 mb-3">
        <div className="text-center mb-3">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
             
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-3">
                    <div className="card-body p-0">
                    <img className="img-fluid" src={quickcv} alt="project1" />
                        <div className="d-flex align-items-center">
                            <div className="p-2">
                                <h2 className="fw-bolder">Quick CV</h2>
                                <p>Quick CV Web Application was created to help design a well strcutured and informative CV. 
This application allows users to focus more on content than design as it has many templates to 
choose from and different information structure options</p>
<p><b>Technologies:</b> Angular, MBD Bootstrap, Java, SpringBoot, MySQL, XepOnline, Typescript</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
                <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
                    <div className="card-body p-0">
                    <img className="img-fluid" src={cvprofile} alt="..." />
                        <div className="d-flex align-items-center ">
                            <div className="p-2 ">
                                <h2 className="fw-bolder">Portoflio </h2>
                                <p>Portfolio web app project uses mdb bootsrtrap and dependency injection to share data accross components
                                ,developed after my internship at Digital
                                Academy</p>
                                <p><b>Technologies:</b> Angular, MBD Bootstrap, JSon</p>
                                <a href="https://my-profile-96530.firebaseapp.com/bio">click to vist site</a>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
               
                <div className="card-body p-0">
                <img className="img-fluid" src={imageGen} alt="..." />
                    <div className="d-flex align-items-center">
                        <div className="p-2">
                            <h2 className="fw-bolder">Image generator</h2>
                            <p>This is a MERN stack app ,it use
            React+Vite in the frontend .This app
                            interact with OpenAI to generate images
                            for users, then shares with community</p>
                            <p><b>Technologies:</b> React, Bulma, Express, OpenAI, MongoDB</p>
                            <a href="https://image-genai.netlify.app/">click to vist site</a>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
            <div className="card-body p-0">
            <img className="img-fluid" src={aisum} alt="..." />
                <div className="d-flex align-items-center">
                    <div className="p-2">
                        <h2 className="fw-bolder">AI BLOG SUMMARIZER</h2>
                        <p>A React that use Open AI to wrap up a
                        URL to a specified short length. It
                        condenses a long article to main points. It
                        is useful for students and news media
                        companies</p>
                        <p><b>Technologies:</b> React, Tailwind css, OpenAI</p>
                        <a href="https://blog-sumar21.netlify.app/">click to vist site</a>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
        <div className="card-body p-0">
        <img className="img-fluid" src={pass} alt="..." />
            <div className="d-flex align-items-center">
                <div className="p-2">
                    <h2 className="fw-bolder">Password generator</h2>
                    <p>A custom  angular web app that assists users to
                    create secured passwords
                    </p>
                    <p><b>Technologies:</b> Angular, Bulma css, Typescript</p>
                    <a href="https://password-generator-a2esnt3ct-plthabangr.vercel.app/">click to vist site</a>
                </div>
               
            </div>
        </div>
    </div>

    <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
    <div className="card-body p-0">
    <img className="img-fluid" src={gitf} alt="..." />
        <div className="d-flex align-items-center">
            <div className="p-2">
                <h2 className="fw-bolder">GitHub finder</h2>
                <p>Github Finder is a Web application that makes it easy for you to search and find users on GitHub. This application has complete features and is easy to use, so it is suitable for those of you who want to find users on GitHub, both for personal and professional purposes. 
                
                </p>
                <p><b>Technologies:</b> React, MBDBootrap, Github, Typescript</p>
                <a href="https://gitapifinder.netlify.app">click to vist site/</a>
            </div>
           
        </div>
    </div>
</div>
<div className="card overflow-hidden shadow rounded-4 border-0 mb-3">
                    <div className="card-body p-0">
                    <img className="img-fluid" src={fm} alt="project1" />
                        <div className="d-flex align-items-center">
                            <div className="p-2">
                                <h2 className="fw-bolder">Finance Management</h2>
                                <p>Money manager & expenses app will help you take your budget, money and finances under control and won’t take much time. It’s a very convenient budget app that can be used as an expense</p>
<p><b>Technologies:</b> React, Bootstrap, Express, Mongo, React clerk, Node, Typescript</p>
<a href="https://trfinanceplatform.netlify.app">click to vist site</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
    <div className="card overflow-hidden shadow rounded-4 border-0  mb-3">
    <div className="card-body p-0">
    <img className="img-fluid" src={tasks} alt="..." />
        <div className="d-flex align-items-center">
            <div className="p-2">
                <h2 className="fw-bolder">Task planner</h2>
                <p>Task management app to help you stay organized and manage your day-to-day which boost productivity by allowing users to login and to create tasks with details such as title,description and date .This App uses CRUD operation to edit,delete,and Simple UI.  </p>
                <p><b>Technologies:</b> React, Bulma CSS, Express, MongoDB, Node, Javascript</p>
                <a href="https://github.com/PLThabangR/Express-Web-Sever">click to visit site</a>
            </div>
           
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div>
<section className="py-2 bg-gradient-primary-to-secondary text-white">
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