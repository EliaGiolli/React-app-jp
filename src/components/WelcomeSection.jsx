import React from 'react'
import Fuji from '../assets/img/fujisan.jpg';

const WelcomeSection = () => {
  return (
    <>
      <section className='relative'>
        <img src={Fuji} alt='富士山の写真' 
          className='w-full object-cover'/>
        <h1 
          className='bg-slate-50/75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-3xl sm:text-center sm:top-1/4 sm:text-left border-2 border-zinc-300 rounded-full p-4'>
          日本道へよこそ</h1>
      </section>

    </>
  )
}
export default WelcomeSection
