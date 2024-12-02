import React from 'react'
import logo from '../assets/logo_dark.svg'

const Footer = () => {
  return (
    <div className='w-full   bg-[#111827] text-gray-400 mt-20  px-6 md:20 lg:px-32'>
<div className='container  mx-auto flex flex-col md:flex-row gap-10 py-6 justify-between'>
    <div className=' w-full md:w-1/3'>
<img src={logo} alt="" />
<p className='pt-3 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    </div>

<div>
    <h3 className=' text-white font-bold text-xl mb-4'>Company</h3>
    <ul className=' flex flex-col gap-2'>
        <a className=' cursor-pointer' href='#Home'>Home</a>
        <a className=' cursor-pointer' href='#About'>About Us</a>
        <a className=' cursor-pointer' href='#contact'>Contact Us</a>
        <a className=' cursor-pointer' href='#Home'>Privacy Policy</a>
    </ul>
</div>

<div className=' flex flex-col'>
<h3 className=' text-white font-bold text-xl mb-4'>Subscribe to our newsletter</h3>
<p>The latest news, articles, and resources, sent to your inbox weekly.</p>
<div className=' mt-4  flex gap-3'>
    <input className=' p-3 bg-[#1F2937] outline-none rounded w-full ' type="email" placeholder='Enter your email' />
    <button className=' text-white bg-blue-500 px-5 py-1 rounded border-none'>Subscribe</button>
</div>

</div>




</div>
<div className=' border-gray-500 border-t-[1px] flex justify-center py-4 text-center'>
<p>Copyright 2024 © GreatStack. All Right Reserved.</p>
</div>
    </div>
  )
}

export default Footer