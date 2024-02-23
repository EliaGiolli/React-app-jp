import React from 'react'

const OlderArticles = ({isRead,img, title, topic, description}) => {
  const linkText ="記事を読むこと";
  return (
    <>
        <div 
            className='bg-zinc-100 shadow-lg w-full sm:max-h-96 md:max-h-full lg:max-h-full 
                       border-2 border-zinc-300 rounded-md text-center p-5 my-5'>
        <img src={img} alt="現在の日本" className='w-full max-h-40 object-cover my-5'/>
                <h3 className='font-bold text-2xl text-red-500 py-3'>{title}</h3>
                <div className='flex justify-around items-center text-center'>
                        <span className='p-3 text-md font-semibold border-2 border-zinc-300 rounded-full '>
                                {isRead ? "既読" : "未読"}
                        </span>
                        <h4 className='text-lg font-semibold py-3'>{topic}</h4>
                </div>
                <p className='text-md text-lg text-wrap p-3 my-3'>{description}</p>
                <a href="#" 
                className="bg-red-500 hover:bg-red-700 text-white text-md border-2 border-zinc-300 rounded-full p-3 my-2">
                        {linkText}
                </a>
        </div>
    </>
  )
}

export default OlderArticles
