import React from 'react'
import logo from "../assets/logo.svg"
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className="flex flex-col items-center pb-4">
        <div id='upper_sec' className='upper_Sec w-[100%] h-[270px] md:h-[300px] bg-[hsl(257,27%,26%)] '>
            <div className='w-[95%] md:w-[85vw] lg:w-[80vw] mx-auto container flex flex-col h-[270px] justify-center items-center gap-5 text-white font-bold'>
                <h1 className='text-2xl md:text-4xl'>Boost your links today</h1>
                <button className='rounded-full bg-[hsl(180,66%,49%)] px-5 py-1 hover:cursor-pointer hover:bg-[hsla(180,66%,49%,0.5)] text-md md:text-lg lg:text-xl'>Get Started</button>
            </div>
        </div>
        <div className='bg-[hsl(260,8%,14%)] w-[100%]'>
            <div className='w-[95%] md:w-[85vw] lg:w-[80vw] mx-auto container flex py-4 gap-3 flex-col md:flex-row md:justify-between'>
                <span className='md:w-[25%] py-3'><img className='filter invert-[1] brightness-[0] mx-auto md:mx-0' src={logo} alt="Shortl-Logo" /></span>
                <div className='flex flex-col md:flex-row gap-3 md:w-[70%] md:justify-between'>
                    <div className='flex flex-col md:flex-row gap-7 md:gap-4 text-white text-center md:text-start'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='py-1 text-lg'>Features</h1>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Link Shortening</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Branded Links</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Analytics</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='py-1 text-lg'>Resources</h1>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Blog</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Developers</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Support</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='py-1 text-lg'>Company</h1>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>About</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Our Team</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Career</p>
                            <p className=' hover:text-[hsl(180,66%,49%)] text-[13px] hover:cursor-pointer font-semibold text-[hsl(0,0%,75%)]'>Contact</p>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-center py-3'>
                        <a className='social-icon' href="#"><img className='w-[80%]' src={facebook} alt="logo" /></a>
                        <a className='social-icon' href="#"><img className='w-[80%]' src={twitter} alt="logo" /></a>
                        <a className='social-icon' href="#"><img className='w-[80%]' src={pinterest} alt="logo" /></a>
                        <a className='social-icon' href="#"><img className='w-[80%]' src={instagram} alt="logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer