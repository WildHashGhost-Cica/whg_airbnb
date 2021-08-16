import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-black">
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">About</h5>
                <p className="text-blue-300">How Airbnb works</p>
                <p className="text-blue-300" >Newsroom</p>
                <p className="text-blue-300">Investors</p>
                <p className="text-blue-300">Airbnb Plus</p>
                <p className="text-blue-300">Airbnb Luxe</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="text-blue-300">Accessibility</p>
                <p className="text-blue-300">Tis is not a realsite</p>
                <p className="text-blue-300">it's a pretty awesome clone</p>
                <p className="text-blue-300">Reerrals accepted</p>
                <p className="text-blue-300">WHG</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">HOST</h5>
                <p className="text-blue-300">Papa React</p>
                <p className="text-blue-300">Presents</p>
                <p className="text-blue-300">Zero to Full Stack Hero</p>
                <p className="text-blue-300" >Hundreds os Students</p>
                <p className="text-blue-300">Join Now</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="text-blue-300">Help Centre</p>
                <p className="text-blue-300">Turst & Safety</p>
                <p className="text-blue-300">Say Hi YouTube</p>
                <p className="text-blue-300">Easter Eggs</p>
                <p className="text-blue-300">For the Win</p>
            </div>

           
        </div>

    )
}

export default Footer
