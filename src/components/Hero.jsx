import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className="flex items-center justify-between w-full mb-10 ">
        {/* <img src={logo} alt="logo" className='object-contain w-28'/> */}
      <button
      onClick={()=> window.open('https://github.com/KunalPrajapati')}
       type='button'
       className='black_btn'
       >
        Github</button>
      </nav>
      <h1 className='head_text'> Summarize Articles with <br className='max-md:hidden'/>
      <span className='orange_gradient'>OpeanAI GPT-4</span> </h1>
      <h2 className='desc'>
        Simplify your reading with Smart Summarizer. an Open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero
