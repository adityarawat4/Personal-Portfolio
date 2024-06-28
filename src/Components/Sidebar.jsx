import React from 'react'
import Github from '../../public/github.png'
import Telegram from '../../public/telegram.png'
import Instagram from '../../public/instagram.png'
import Mail from '../../public/mail.png'

function Sidebar({isMenuActive}) {
  return (
    <div className={isMenuActive ? `fixed flex z-50 w-full h-screen justify-center bg-secondry text-white` : 'bg-secondry text-white md:w-72 md:h-[calc(100vh-56px)] md:sticky left-0 top-[56px] justify-center hidden md:flex'}>
        <ul>
            <li className='my-10'><a href="#" className='flex gap-4'><img src={Github} alt="" className='w-7' /> GitHub</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src={Telegram} alt="" className='w-7' /> Telegram</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src={Instagram} alt="" className='w-7' />Insatgram</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src={Telegram} alt="" className='w-7' />X</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src={Mail} alt="" className='w-6 h-5' />Mail</a></li>
        </ul>
    </div>
  )
}

export default Sidebar