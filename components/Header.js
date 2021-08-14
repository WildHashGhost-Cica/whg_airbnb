import React, { useState } from 'react';
import Image from "next/image";
import logo from "../Images/whg.png";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, } from "@heroicons/react/solid"


function Header() {

    const [searchInput, setSearchInput] = useState("");

    

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-black text-blue-400 shadow-md p-5 md:px-10" >
            {/*Left*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto w-16 h-16 ">
                
                <Image
                src={logo}
                layout="fill" 
                objectFit="contain"
                objectPosition="left"
                className="rounded-full"
                /> 
            <p style={{paddingLeft:"70px", fontSize:"30px"}}><b>airbnb</b></p>
            </div>
            
            {/*Midle - Search*/}
            <div className="flex items-center md:border-2 border-blue-400 rounded-full py-2 bg-black">
                <input 
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                type="text" placeholder="Searching for" className="flex-grow pl-5 bg-transparent outline-none placeholder-white"/>
                <SearchIcon className=" hidden md:inline-flex h-8 pr-3 bg-white-400 text-blue rounded-full p-1 cursor-pointer"/>
            </div>
            {/*Right*/}
            <div className="flex items-center space-x-4 justify-end">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>

                <div className="flex items-center border-2 border-blue-400 text-white  rounded-full cursor-pointer p-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput && (
                <div>
                    
                </div>
            )}
            
        </header>
        
    )
}

export default Header
