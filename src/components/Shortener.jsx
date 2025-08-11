import React from 'react'
import brand from '../assets/icon-brand-recognition.svg'
import detailed from '../assets/icon-detailed-records.svg'
import customizable from '../assets/icon-fully-customizable.svg'
import Advanced from './Advanced'

const Shortener = () => {
  return (
    <div className=' bg-gray-100 pb-20'>
      <div className='relative bottom-[80px]'>
        <Advanced/>
      </div>
    <div className='relative'>
      <div className='flex flex-col w-[95%] md:w-[85vw] lg:w-[80vw] mx-auto container'>
        <div className='text-center py-5 pb-20'>
          <h1 className='font-bold text-2xl md:text-4xl text-[hsl(260,8%,14%)]'>Advanced Statistics</h1>
          <p className='text-gray-400 text-sm md:text-lg md:w-[75%] lg:w-[45%] mx-auto py-4'>Track how your links are performing across the web with advanced statistics dashboard</p>
        </div>
        <div className='md:pb-20'>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-15 md:gap-5 md:justify-around px-5 md:px-0">
            <div className="absolute w-2 md:w-[80%] h-[90%] md:h-2 bg-[hsl(180,66%,49%)] top-[10%] md:top-[50%] md:left-[10%]"></div>
            <div className='z-10 bg-white rounded-md px-5 relative flex h-[250px] lg:h-[250px] md:h-[300px] flex-col justify-center items-center md:items-start md:w-[30%]'>
              <div className='w-18 h-18 md:h-17 md:w-17 rounded-full md:mb-3 bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                <img src={brand} alt="" />
              </div>
              <h1 className='font-bold text-[hsl(260,8%,14%)] text-xl md:text-sm lg:text-xl pb-3'>Brand Recognition</h1>
              <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content</p>
            </div>
            <div className='z-10 mt-0 md:mt-12 bg-white rounded-md px-5 relative lg:h-[250px] h-[250px] md:h-[300px] flex flex-col justify-center items-center md:items-start md:w-[30%]'>
              <div className='w-18 h-18 md:h-17 md:w-17 rounded-full bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                <img src={detailed} alt="" />
              </div>
              <h1 className='font-bold text-[hsl(260,8%,14%)] text-xl md:text-sm lg:text-xl pb-3'>Detailed Records</h1>
              <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start'>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
            </div>
            <div className='z-10 mt-0 md:mt-24 bg-white rounded-md px-5 relative flex lg:h-[250px] h-[250px] md:h-[300px] flex-col justify-center items-center md:items-start md:w-[30%]'>
              <div className='w-18 h-18 md:h-17 md:w-17 md:mb-3 rounded-full bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                <img src={customizable} alt="" />
              </div>
              <h1 className='font-bold text-[hsl(260,8%,14%)] text-xl md:text-sm lg:text-xl md:pt-10 lg:pt-0 pb-3'>Fully Customizable</h1>
              <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start md:pb-4'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shortener