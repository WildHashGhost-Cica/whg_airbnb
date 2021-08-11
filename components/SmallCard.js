import React from 'react'
import Image from 'next/dist/client/image';

function SmallCard({img, location, distance}) {
    return (
        <div>
            {/*Left*/}
            <div>
                <Image 
                src={img}
                layout="fill"
                />
            </div>

            {/*Right*/}
            
        </div>
    )
}

export default SmallCard
