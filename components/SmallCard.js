import React from 'react'
import Image from 'next/dist/client/image';

function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-900 hover:scale-105 transition transform duration-200 easy-out ">
            {/*Left*/}
            <div className="relative h-16 w-16">
                <Image 
                src={img}
                layout="fill"
                className="rounded-lg"
                />
            </div>

            {/*Right*/}
            <div>
                <h2 className="text-blue-600">{location}</h2>
                <h3 className="text-blue-300" >{distance}</h3>
            </div>
            
        </div>
    )
}

export default SmallCard
