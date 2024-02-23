import React from 'react'


const PopularArticles = ({isRead,img, title, description}) => {
  const linkText ="記事を読むこと";
  return (
        <>
        <div 
        className='bg-zinc-50 shadow-lg w-full sm:max-h-96 md:max-h-full lg:max-h-full 
                    text-center border-2 border-zinc-300 rounded-md p-5 my-5'>
                <img src={img} alt="武士" className='w-full max-h-40 object-cover my-5'/>
                <h3 className='font-bold text-2xl text-red-500 my-5'>{title}</h3>
                <span className='p-3 text-md font-semibold border-2 border-zinc-300 rounded-full '>
                        {isRead ? "既読" : "未読"}
                </span>
                <p className='text-md text-wrap p-3 my-5'>{description}</p>
                <a href="#" 
                className="bg-red-500 hover:bg-red-700 text-white text-md rounded-full p-3 my-2 ">
                        {linkText}
                </a>
        </div>
        </>
    
  )
}
export default PopularArticles