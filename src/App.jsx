import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className=' overflow-hidden'>
      <ToastContainer/>
      <Home/>
   <About/>
   <Projects/>
   <Testimonials/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App