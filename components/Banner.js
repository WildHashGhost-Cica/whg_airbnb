import Image from 'next/image'
import React from 'react'
import logo from '../Images/whg.png'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700] bg-opacity-0 ">
            <Image
            src={logo}
            layout="fill"
            objectFit="cover"
            />

            <div className="absolute top-1/2 text-center w-full /*bg-black bg-opacity-70*/">
                <p className="text-sm sm:text-lg text-white p-2 mt-3 "><b>Not sure where to go? Perfect.</b></p>
                <button className="text-white bg-blue-400 px-10 py-4 rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150"><b>I'm Flexible</b></button>
            </div>
        </div>
    )
}

export default Banner
