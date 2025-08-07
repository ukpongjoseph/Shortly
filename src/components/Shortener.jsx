import React from 'react'
import brand from '../assets/icon-brand-recognition.svg'
import detailed from '../assets/icon-detailed-records.svg'
import customizable from '../assets/icon-fully-customizable.svg'

const Shortener = () => {
  return (
    <div className='bg-gray-100 py-[100px] md:pt-[350px] pt-[450px] md:min-h-[700px]'>
      <div className='flex flex-col  w-[95%] md:w-[85vw] lg:w-[80vw] mx-auto container'>
        <div className='text-center py-5 pb-20'>
          <h1 className='font-bold text-2xl md:text-4xl text-[hsl(260,8%,14%)]'>Advanced Statistics</h1>
          <p className='text-gray-400 text-sm md:text-lg md:w-[75%] lg:w-[45%] mx-auto py-4'>Track how your links are performing across the web with advanced statistics dashboard</p>
        </div>
        <div>
          <div className='w-[100%] flex flex-col md:flex-row'>
            {/* first box */}
            <div className='bg-white rounded-md px-5 py-10 relative h-[250px] flex flex-col justify-center items-center md:items-start'>
              <div className='w-18 h-18 rounded-full bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                <img src={brand} alt="" />
              </div>
              <h1 className='font-bold text-[hsl(260,8%,14%)] py-3 text-xl md:text-sm lg:text-2xl'>Brand Recognition</h1>
              <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content</p>
            </div>
              <h1 className='md:border-b-6 border-t-0 border-l-0 md:border-r-0 border-r-6 border-b-0 w-[50%] md:w-auto border-[hsl(180,66%,49%)] text-gray-100 h-[125px]'>...</h1>
            {/* second box */}
            <div className='bg-white rounded-md px-5 py-10 relative min-h-[250px] flex flex-col justify-center items-center md:items-start md:mt-7'>
                <div className='w-18 h-18 rounded-full bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                  <img  src={detailed} alt="" />
                </div>
                <h1 className='font-bold text-[hsl(260,8%,14%)] py-3 text-xl md:text-sm lg:text-2xl'>Detailed Records</h1>
                <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start'>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
            </div>
              <h1 className='md:border-b-6 border-t-0 border-l-0 md:border-r-0 border-r-6 border-b-0 w-[50%] md:w-auto border-[hsl(180,66%,49%)] text-gray-100 h-[125px]'>...</h1>
            {/* third box */}
            <div className='bg-white rounded-md px-5 py-10 relative min-h-[250px] flex flex-col justify-center items-center md:items-start md:mt-18'>
                <div className='w-18 h-18 rounded-full bg-[hsl(257,27%,26%)] flex justify-center items-center absolute bottom-[85%]'>
                  <img src={customizable} alt="" />
                </div>
                <h1 className='font-bold text-[hsl(260,8%,14%)] py-3 text-xl md:text-sm lg:text-2xl'>Fully Customizable</h1>
                <p className='text-[hsl(0,0%,75%)] text-sm md:text-md text-center md:text-start'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shortener