import React from 'react'


const PopularArticles = ({img, title, description}) => {
  const linkText ="記事を読むこと";
  return (
        <>
        <div className='bg-zinc-50 shadow-lg w-full sm:max-h-96 md:max-h-full lg:max-h-full text-center p-5 my-5'>
                <img src={img} alt="武士" className='w-full max-h-40 object-cover my-5'/>
                <h3 className='font-bold text-2xl text-red-500'>{title}</h3>
                <div className='flex justify-between items-center text-center p-3 my-2'>
                        <p className='text-md text-wrap'>{description}</p>
                </div>
                <a href="#" className="text-red-500 font-medium text-md underline">{linkText}</a>
        </div>
        </>
    
  )
}
export default PopularArticles