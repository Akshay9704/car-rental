import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10'>
        <div>
            <h2 className='text-[40px] md:text-[50px] font-bold'>
                Welcome to <span className='text-blue-500'>Car Rental Service</span>
            </h2>
            <p className='text-[20px] mt-5'>
                Rent a car from our extensive range of luxury cars and enjoy the best service.
            </p>
            <button className='bg-blue-500 text-white p-3 mt-5 rounded-full hover:scale-105 transition-all'>
                Explore Cars
            </button>
        </div>
        <div>
            <Image src='/hero.png' width={500} height={500} alt='Car' />
        </div>
    </div>
  )
}

export default Hero