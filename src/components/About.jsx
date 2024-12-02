import React from 'react'
import brand from '../assets/brand_img.png'
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div initial={{opacity:0, x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     id='About' className=' max-w-[1440px]  mx-auto overflow-hidden flex flex-col items-center  px-12 md:px-20 lg:px-32'>

        <div className=' flex flex-col items-center  text-center pt-10'>
            <h2 className=' text-4xl mb-3 '><span className='font-bold'>About</span> <span className=' font-light underline-offset-4 decoration-1   underline'>Our Brand </span> </h2>
            <p className=' text-gray-600 font-medium'>Passionate About Properties, Dedicated to <br /> Your Vision</p>
        </div>

        <div className=' w-full flex flex-col lg:flex-row items-center lg:items-start pt-20 lg:gap-20'>
       
            <img className=' w-full sm:w-1/2 max-w-lg'  src={brand} alt="" />
       
           
            <div className=' flex flex-col items-center md:items-start mt-10'>
                <div className=' grid grid-cols-2 gap-6 md:gap-10 items-center text-gray-600' >
                    <div>
                    <h3 className=' font-bold text-4xl text-black'>10+</h3>
                    <p>Years of Excellence</p>
                    </div>
                  <div>
                  <h3 className=' font-bold text-4xl text-black'>12+</h3>
                  <p>Projects Completed</p>
                  </div>
                    <div>
                    <h3 className=' font-bold text-4xl text-black'>20+</h3>
                    <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                  <div>
                  <h3 className=' font-bold text-4xl text-black'>25+</h3>
                  <p>Ongoing Projects</p>
                  </div>
                 
                </div>
                <div className=' pt-10 flex flex-col lg:items-start items-center'>
                    <p className=' text-gray-600 max-w-lg font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="px-8 py-2 text-white bg-blue-700 rounded mt-10">Learn More</button>
                </div>
            </div>
            </div>
        </motion.div>

  
  )
}

export default About