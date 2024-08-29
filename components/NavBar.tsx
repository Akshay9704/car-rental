import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-5 shadow-md border-b-[1px]'>
        <Image src='/logo.png' alt='logo' width={150} height={100} />
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>About</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>Contact Us</h2>
        </div>
        <UserButton />
    </div>

  )
}

export default NavBar