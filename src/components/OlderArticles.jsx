import React from 'react'

const OlderArticles = ({img, title, topic, description}) => {
  const linkText ="記事を読むこと";
  return (
    <>
        <div className='bg-zinc-100 shadow-lg w-full sm:max-h-96 md:max-h-96 lg:max-h-full text-center p-5 my-5'>
        <img src={img} alt="現在の日本" className='w-full max-h-40 object-cover my-5'/>
                <h3 className='font-bold text-2xl text-red-500 py-3'>{title}</h3>
                <h4 className='text-md text-lg font-semibold py-3'>{topic}</h4>
                <p className='text-md text-lg text-wrap py-3'>{description}</p>
                <a href="#" className="text-red-500 font-medium text-md underline py-3">{linkText}</a>
        </div>
    </>
  )
}

export default OlderArticles
