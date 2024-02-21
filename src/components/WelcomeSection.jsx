import React from 'react'
import Fuji from '../assets/img/fujisan.jpg';

const WelcomeSection = () => {
  return (
    <>
      <section className='relative h-full'>
        <img src={Fuji} alt='富士山の写真' 
          className='w-full object-cover'/>
       <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <h1 
            className='bg-slate-50/75 sm:text-3xl md:text-3xl lg:text-5xl text-bold text-center 
            border-2 border-zinc-300 rounded-full sm:p-5 md:p-5 lg:p-8'>
            日本道へよこそ
          </h1>
        </div>
      </section>

    </>
  )
}
export default WelcomeSection
