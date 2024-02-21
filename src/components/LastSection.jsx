import React from 'react'
import Logo from '../assets/img/logo.png'

const LastSection = () => {
  return (
    <>
       <footer className="bg-gray-100 border-t border-gray-200 mt-5 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between px-5">
            <div className="flex items-center">
              <img src={Logo} alt="Logo Giolli Design" className="inline-block w-32 h-32 object-fit border-zinc-300 rounded-full" />
              <h6 className="ml-2">日本道</h6>
            </div>
            <div className="mt-4 md:mt-0">
              <h5 className="text-lg font-semibold mb-2">連絡してください</h5>
              <p className="mb-4">メールアドレス: info@nihondo.jp</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-messenger"></i></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
      </footer>


    </>
  )
}

export default LastSection
