import React from 'react'
import hero from '../assets/illustration-working.svg'


const Hero = () => {
  return (
    <div className=' flex flex-col pb-20'>
      <div className='flex-1 py-5 md:py-8 lg:py-6 flex justify-center md:w-[80vw] mx-auto md:static'>
          <div className='w-[95%] md:w-[92vw] lg:w-[90vw] container flex flex-col items-end justify-end gap-3 md:flex-row-reverse pt-4'>
              <span className='md:w-[50%]'><img src={hero} alt="Hero_Section_image" /></span>
              <div className='text-center md:text-start flex flex-col gap-4 md:w-[50%] md:my-auto'>
                  <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl'>More than just shorter links</h1>
                  <p className='text-[hsl(257,7%,63%)] text-md md:text-lg lg:text-xl'>Build your brand's recognition and get detailed insights on how your links are performing</p>
                  <button className='rounded-full bg-[hsl(180,66%,49%)] text-white px-3 py-1 hover:cursor-pointer hover:bg-[hsla(180,66%,49%,0.5)] font-semibold text-md md:text-lg lg:text-xl lg:w-[30%] w-[50%] mx-auto md:mx-0'>Get Started</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero