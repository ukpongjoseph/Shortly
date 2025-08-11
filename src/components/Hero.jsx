import React from 'react'
import hero from '../assets/illustration-working.svg'


const Hero = () => {
  return (
    <div className=' flex flex-col pb-20'>
      <div className='flex-1 py-5 md:pb-8 12 lg:pb-16 flex justify-center md:w-[85vw] lg:w-[80vw] mx-auto md:static'>
          <div className='w-[95%] md:w-[100%] container flex flex-col items-end justify-end gap-3 md:flex-row-reverse pt-4'>
              <span className='md:w-[50%]'><img src={hero} alt="Hero_Section_image" /></span>
              <div className='text-center md:text-start flex flex-col gap-4 md:w-[50%] md:my-auto'>
                  <h1 className='font-bold text-4xl md:text-4xl lg:text-5xl text-[hsl(260,8%,14%)]'>More than just shorter links</h1>
                  <p className='text-[hsl(257,7%,63%)] text-md lg:text-lg'>Build your brand's recognition and get detailed insights on how your links are performing</p>
                  <button className='rounded-full bg-[hsl(180,66%,49%)] text-white px-3 py-1 hover:cursor-pointer hover:bg-[hsla(180,66%,49%,0.5)] font-semibold text-md lg:text-lg lg:w-[40%] w-[50%] mx-auto md:mx-0'>Get Started</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero