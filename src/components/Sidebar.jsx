import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header>
            <div className="px-4 py-2 text-white uppercase text-xl flex justify-between bg-[#7B3F00]">
                <h1 className="flex justify-center text-3xl">
                    <img 
                        src="placeholder"
                        alt="logo"
                        className="mx-auto"
                    />
                </h1>
                <div className={toggleMenu ? "z-30 md:flex md:pt-0 pt-10 w-full  md:w-auto" : "hidden md:flex"} id="menu">
                <ul className="z-10 w-full max-w-7xl">
                    <li className="md:inline-block cursor-pointer hover:text-emerald-500 border-b md:border-none py-2 px-3"><a href="/" className="transition duration-500 text-white font-curv font-semibold text-center hover:text-emerald-500 text-3xl">Home</a></li>
                    <li className="md:inline-block cursor-pointer hover:text-emerald-500 border-b md:border-none py-2 px-3"><a href="/#about" className="transition duration-500 text-white font-curv font-semibold text-center hover:text-emerald-500 text-3xl">About</a></li>
                    <li className="md:inline-block cursor-pointer hover:text-emerald-500 border-b md:border-none py-2 px-3"><a href="/#projects" className="transition duration-500 text-white font-curv font-semibold text-center hover:text-emerald-500 text-3xl">Products</a></li>
                    <li className="md:inline-block cursor-pointer hover:text-emerald-500 border-b md:border-none py-2 px-3"><a href="/#contact" className="transition duration-500 text-white font-curv font-semibold text-center hover:text-emerald-500 text-3xl">Contact</a></li>
                </ul>
                </div>
                <div className="cursor-pointer md:hidden">
                    <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
                    <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                        <span onClick={handleToggle} className="navicon flex items-center relative text-white text-2xl">{!toggleMenu ? <FaBars /> : <FaTimes />}</span>
                    </label>
                </div>
            </div>
        </header>
        
    );
};

export default Sidebar;