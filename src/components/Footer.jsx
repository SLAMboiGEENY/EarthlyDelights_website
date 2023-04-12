import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { RiPatreonLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer aria-label=" Footer" className='bg-stone-600'>
                <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-sans text-white sm:text-5xl">
                            Tinctures at your Doorstep
                        </h2>

                        <p className="max-w-sm mx-auto mt-4 text-white font-sans font-semibold">
                            With the press of a button you can have all the natural, homeopathic, environmentally friendly rememdies at your doorstep within a few days.
                        </p>

                        {/* button */}
                        <a 
                            href="/#products"
                            className='group mt-3 relative inline-block focus:outline-none focus:ring'
                        >
                            <span 
                                className='absolute rounded-lg inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0'
                            ></span>

                            <span 
                                className='relative inline-block border-3 border-current px-8 py-3 text-sm font-bold font-sans uppercase tracking-widest text-white group-active:text-opacity-75'
                            >
                                shop now
                            </span>
                        </a>

                        {/* footer social links / endings */}
                        <div className="pt-8 mt-16 border-t-4 border-white sm:flex sm:items-center sm:justify-between lg:mt-24">
                            <nav aria-label="Footer Navigation">
                                <ul className='flex flex-wrap justify-center gap-4 text-xs lg:justify-end'>
                                    <li>
                                        <a href="/#home" className='text-white font-sans transition hover:opacity-75'>
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white font-sans transition hover:opacity-75'>
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white font-sans transition hover:opacity-75'>
                                            Cookies
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            {/* social icons */}
                            <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                                <li>
                                    <a 
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:opacity-75 text-xl font-bold"
                                    >
                                        <AiOutlineFacebook />
                                        
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:opacity-75 text-xl font-bold"
                                    >
                                        <AiOutlineInstagram />
                                        
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:opacity-75 text-xl font-bold"
                                    >
                                        <RiPatreonLine />
                                        
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </footer>
        </div>
    );
}   

export default Footer;