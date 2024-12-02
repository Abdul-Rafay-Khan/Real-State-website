import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div>
    <div className=' flex items-center justify-between p-4  max-w-[1500px] mx-auto'>
        <img src={logo} alt="" />
        <div className='  gap-6 text-white font-semibold hidden md:flex'>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Testimonials">Testimonials</a>
        </div>
        <button className=' bg-white text-black font-semibold rounded-full border-none px-7 py-2 hidden md:block'>Sign Up</button>
        <div className=' flex md:hidden text-white ' onClick={()=>setNav(!nav)}>
        {nav ? <MdOutlineClose size={30}/> : <AiOutlineMenuFold size={30} />  }
        </div>



    </div>

    {/*   responsive Navbar */}
    <div className={nav ? ' h-screen w-[300px] absolute top-0 left-0 bg-white duration-300':'absolute left-[-100%]'}>
        <div className=' flex flex-col gap-6 p-4 pt-10 md:hidden font-semibold'>
            <a onClick={()=>setNav(!nav)} href="#Home">Home</a>
            <a onClick={()=>setNav(!nav)} href="#About">About</a>
            <a onClick={()=>setNav(!nav)} href="#Projects">Projects</a>
            <a onClick={()=>setNav(!nav)} href="#Testimonials">Testimonials</a>
        </div>
    </div>
    </div>
  )
}

export default Navbar