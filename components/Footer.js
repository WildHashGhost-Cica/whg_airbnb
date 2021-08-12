import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14">
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Tis is not a realsite</p>
                <p>it's a pretty awesome clone</p>
                <p>Reerrals accepted</p>
                <p>WHG</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">HOST</h5>
                <p>Papa React</p>
                <p>Presents</p>
                <p>Zero to Full Stack Hero</p>
                <p>Hundreds os Students</p>
                <p>Join Now</p>

            </div>
            <div className="space-y-4 text-xs text-blue-600">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Turst & Safety</p>
                <p>Say Hi YouTube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>

           
        </div>

    )
}

export default Footer
