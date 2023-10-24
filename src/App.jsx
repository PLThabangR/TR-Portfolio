import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './components/Index'
import Contact from './components/Contact'
import Project from './components/Project'
import Resume from './components/Resume'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <main >
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    </main>
  
    <div>
   


    <Footer/>
    </div>
    </BrowserRouter>
   

   
    </>
  )
}

export default App
