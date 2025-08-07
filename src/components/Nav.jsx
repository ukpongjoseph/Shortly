import React, {useState} from 'react'
import { Menu} from 'lucide-react';
import logo from "../assets/logo.svg"
import Hero from './Hero';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const mobileToggle = ()=>{
        setIsOpen(isOpen?false:true)
    }
  return (
    <div className=''>
        <div className='w-[95%] md:w-[85vw] lg:w-[80vw] mx-auto container flex justify-between py-4'>
        <div className='flex gap-10'>
            <img className='w-[120px] md:w-[160px]' src={logo} alt="Shortly Logo" />
            <div className='md:flex md:gap-5 lg:gap-7 hidden text-[hsl(257,7%,63%)] font-semibold text-md my-auto'>
                <a className='hover:cursor-pointer hover:text-black' href="#">Features</a>
                <a className='hover:cursor-pointer hover:text-black' href="#">Pricing</a>
                <a className='hover:cursor-pointer hover:text-black' href="#">Resources</a>
            </div>

        </div>
        <div className='md:flex md:gap-7 hidden items-center my-auto font-semibold text-md'>
            <button className='text-[hsl(257,7%,63%)] hover:cursor-pointer hover:text-black'>LogIn</button>
            <button className='rounded-full bg-[hsl(180,66%,49%)] text-white px-3 py-1 hover:cursor-pointer hover:bg-[hsla(180,66%,49%,0.5)]'>Sign Up</button>
        </div>
        <button onClick={mobileToggle} className='block md:hidden mb-2'><Menu/></button>
        </div>
        <div className='mt-4'>
            <Hero/>
        </div>
        {
            isOpen &&
            <div className='flex flex-col items-center gap-4 md:hidden font-semibold text-md pt-2 rounded-2xl bg-[hsl(257,27%,26%)] w-[90%] mx-auto pb-[20px] px-3 absolute top-15 left-4 z-1'>
                <a className='hover:cursor-pointer hover:text-black text-white pt-[30px]' href="#">Features</a>
                <a className='hover:cursor-pointer hover:text-black text-white' href="#">Pricing</a>
                <a className='hover:cursor-pointer hover:text-black text-white' href="#">Resources</a>
                <button className='hover:cursor-pointer hover:text-black text-white border border-b-0 border-l-0 border-r-0 border-[hsl(257,7%,63%)] pt-4 w-[90%]'>LogIn</button>
                <button className='rounded-full bg-[hsl(180,66%,49%)] text-white mx-auto py-1 hover:cursor-pointer w-[85%] hover:bg-[hsla(180,66%,49%,0.5)]'>Sign Up</button>
            </div>
        }

    </div>
  )
}

export default Nav