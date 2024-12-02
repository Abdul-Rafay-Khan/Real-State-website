import React, { useRef } from 'react'
import { projectsData } from '../assets/assets';
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { motion } from "motion/react";

const Projects = () => {
    const elementRef=useRef();

   const sliderRight = (e)=>{
e.scrollLeft+=800
   }
   const sliderLeft = (e)=>{
    e.scrollLeft-=800
   }
  return (
    <motion.div initial={{opacity:0, x:-100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     id='Projects' className='  w-full  container mx-auto px-6 md:20 lg:px-32'>

<div className=' flex flex-col items-center  text-center pt-10'>
            <h2 className=' text-4xl mb-3 '><span className='font-bold'>Projects</span> <span className=' font-light underline-offset-4 decoration-1   underline'>Completed </span> </h2>
            <p className=' text-gray-600 font-medium mb-8'>Crafting Spaces, Building Legacies—Explore <br /> Our Portfolio</p>
        </div>
{/* 
        slider button */}
        <div className='  justify-end items-center mb-8 text-black hidden md:flex'>
            <button className=' p-2 bg-gray-200 rounded-full mr-2 ' aria-label='Previous Project'>
            <MdOutlineChevronLeft  size={30} onClick={()=>sliderLeft(elementRef.current)}/>
            </button>
            <button className=' p-2 bg-gray-200 rounded-full mr-2' aria-label='Next Project'>
            <MdChevronRight size={30}  onClick={()=>sliderRight(elementRef.current)}/>
            </button>
      
      
        </div>

{/* project slider container */}
<div className=' overflow-x-auto  scrollbar-none scroll-smooth' ref={elementRef}>
    <div className=' flex gap-8 transition-transform duration-500 ease-in-out'>
        {
            projectsData.map((items,index)=>(
                <div key={index} className=' relative flex-shrink-0 w-full sm:w-1/4 cursor-pointer'>
                    <img className=' w-full h-auto mb-14' src={items.image} alt="" />
                    <div className=' absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className=' bg-white px-5 py-2 inline-block w-3/4 shadow-lg'>
                        <h2 className=' text-xl font-bold text-black'>{items.title}</h2>
                        <p className=' text-gray-500 text-sm'>{items.price} | {items.location}</p>

                        </div>
                    </div>
                </div>

            ))
        }
    </div>
</div>
    </motion.div>
  )
}

export default Projects