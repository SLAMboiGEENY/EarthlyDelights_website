import React from 'react'

const Hero = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-10 sm:px-6 md:px-8 md:py-12 bg-stone-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div 
                    className='relative h-64 border-4 overflow-hidden rounded-lg sm:h-80 md:order-last md:h-screen'
                >
                    <video 
                        className="w-full min-h-screen object-cover opacity-90"
                        autoPlay 
                        loop 
                        muted 
                    >
                        <source src="/Earthly/HibiReel1.mp4"/>
                    </video>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <div className="relative rounded-lg h-64 border-4 sm:h-80 md:order-first ">
                        <div className="mx-auto font-sans text-white">
                            <h1 className="text-center font-bold text-3xl">Modern Day Witchcraft</h1>
                            <div className="flex justify-center items-center">
                                <p className="font-medium text-lg flex mt-4 mx-4">In this video here you see a special type of magick taking place, the art of procurring a tincture! This is done by handling the essence of the flora, combined with common goods and a lot of love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Hero;