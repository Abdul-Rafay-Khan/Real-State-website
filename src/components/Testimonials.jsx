import React from 'react'
import { testimonialsData } from '../assets/assets'
import star from "../assets/star_icon.svg"
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div  initial={{opacity:0, x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    id='Testimonials' className=' w-full  container mx-auto px-6 md:20 lg:px-32 pt-10'>
        
<div className=' flex flex-col items-center  text-center '>
            <h2 className=' text-4xl mb-3 '><span className='font-bold'>Customers</span> <span className=' font-light underline-offset-4 decoration-1   underline'>Testimonials </span> </h2>
            <p className=' text-gray-600 font-medium mb-8'>Real Stories from Those Who Found Home <br /> with Us</p>
        </div>

        <div className=' flex flex-wrap gap-8 justify-center'>
            {
                testimonialsData.map((elemnts,index)=>(
                    <div className=' text-center max-w-[340px] border shadow-lg rounded px-8 py-12 flex flex-col items-center '>
                        <img className=' pb-3' src={elemnts.image} alt="" /> 
                        <h2 className=' text-xl font-semibold'>{elemnts.name}</h2>
                        <p className=' text-gray-500 text-sm'>{elemnts.title}</p>
                       <div className=' flex py-3'>
                        {
                            Array.from({length:elemnts.rating},(items,index)=>(
                                <img key={index} src={star} alt="" />
                            ))
                        }
                       </div>
                        <p className=' text-gray-600 mb-7'> {elemnts.text}</p>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Testimonials