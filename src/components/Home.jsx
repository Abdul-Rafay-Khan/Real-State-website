import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
const Home = () => {
  return (
    <div id='Home' className='  w-full bg-cover bg-center overflow-hidden  h-screen'  style={{ backgroundImage: "url('/header_img.png')" }}>


<Navbar/>





<motion.div  initial={{opacity:0, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className=' flex flex-col justify-center items-center w-full h-screen text-center text-white'>
        <h1 className='text-4xl md:text-7xl font-bold  '>Explore homes that <br /> fit your dreams</h1>
        <div className=' flex gap-5 mt-12' >
          <button className=' px-7 py-2 rounded-md border border-white font-semibold'>Projects</button>
          <a href='#contact'  className=' px-7 py-2 rounded-md  bg-[#3B82F6] font-semibold'>Contact Us</a>
        </div>
      </motion.div>


    </div>
  )
}

export default Home