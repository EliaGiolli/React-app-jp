import React from 'react'
import Developer from '../assets/img/developer.jpg'

const MainDescription = () => {
  return (
    <>
      <div className='bg-zinc-50 shadow-lg w-full sm:max-h-80 md:max-h-full lg:max-h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-4 p-5 my-16'>
        <div className='p-5'>
          <img className='my-3.5 mx-auto h-36 w-36 border-2 border-zinc-300 rounded-full sm:order-last sm:col-start-2' src={Developer} />
          <div>
            <h2 className='text-red-500 text-3xl font-bold uppercase my-3 px-3'>
              私について
            </h2>
            <p className='sm:text-md md:text-lg lg:text-xl font-medium text-wrap p-4 my-3.5'>
              私は日本道のエリーアです。私はイタリア人です。
            </p>
            <p className='sm:text-md md:text-lg lg:text-xl font-medium text-wrap p-4 my-3.5'>
              お仕事には、私は日本歴史についてのブロックを書いていて開発者として働います。
            </p>
            <p className='sm:text-md md:text-lg lg:text-xl font-medium text-wrap p-4 my-3.5'>
              興味をたくさん持っているのに、私は最も重要な興味について詳しくだけ説明しますよ
            </p>
            <p className='sm:text-md md:text-lg lg:text-xl font-medium text-wrap p-4 my-3.5'>
              私は毎日外国語を勉強していたり、開発も勉強していたり、歴史と地政学の本を読んでいたりします。
            </p>
          </div>
        </div>
    </div>


    </>
  )
}

export default MainDescription
