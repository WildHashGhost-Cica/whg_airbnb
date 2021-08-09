import React from 'react';
import Image from "next/image";
import logo from "../Images/whg.png"


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-black text-blue-700 shadow-md p-5 md:px-10">
            {/*Left*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                
                <Image
                src={logo}
                layout="fill" 
                objectFit="contain"
                objectPosition="left"
                /> 
            <p style={{paddingLeft:"50px"}}><b>airbnb</b></p>
            </div>
            
            {/*Midle - Search*/}
            <div>
                <input type="text"/>
            </div>
            {/*Right*/}
            <div>

            </div>
        
        </header>
        
    )
}

export default Header
