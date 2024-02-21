import React from 'react';
import Logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <>
      <div 
        className="bg-zinc-50 flex justify-center md:justify-start lg:justify-start items-center p-5 w-full border-b-4 border-red-500 ">
        <img src={Logo} alt="logo" 
          className='w-20 h-20 border-2 border-zinc-300 rounded-full hover:bg-slate-50 hover:cursor-pointer' />
        <h2 
          className='text-3xl text-bold px-3'>
          日本道</h2>
      </div>
    </>
  )
}

export default Navbar
