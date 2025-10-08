
import React from 'react'
import placement from '../assests/homepage/placement.png';
import guaranty from '../assests/homepage/gauranty.png'

function GuaranteeBanner() {
    return (
        <div className="relative max-w-5xl mb-20 mx-auto flex flex-col md:flex-row justify-between bg-gray-100  shadow-2xl transform hover:-translate-y-2 transition-all duration-500">

            {/* Left Section: Text Content with Blended Placement Image */}
            <div className="relative w-full rounded-2xl  flex flex-col justify-center p-6 md:p-10 text-center md:text-left overflow-hidden bg-gradient-to-br from-[#1F497D] via-[#2c5aa0] to-[#f3f4f6]">
                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-[#1F497D]/60 opacity-80 mix-blend-overlay"></div>

                {/* Decorative Circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>

                {/* Blended & Zoomed Placement Image */}
                <img
                    src={placement}
                    alt="Graduating students throwing caps in the air"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 opacity-40 mix-blend-multiply w-full h-full object-cover pointer-events-none"
                    style={{ zIndex: 1 }}
                />

                <div className="max-w-3xl text-center mx-auto relative z-10">
                    <p className="text-lg font-semibold text-gray-100 mb-3 uppercase tracking-wide">
                        India’s First Training Which Gives You
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 drop-shadow-md">
                            100% Placement Guarantee
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-200 text-sm md:text-base">
                        Get trained by industry experts with hands-on experience and secure your dream job with our guaranteed placement program.
                    </p>
                </div>

            </div>
            {/* Guarantee Badge positioned half inside, half outside top right */}
            <div className="md:absolute md:-top-10 md:-right-10 z-50 flex justify-center items-center md:block">
                <img
                    src={guaranty}
                    alt="100% Job Placement Guarantee Badge"
                    className="w-32 h-32 md:w-40 md:h-44 object-contain drop-shadow-xl"
                    style={{ display: 'block' }}
                />
            </div>
           
        </div>

    )
}

export default GuaranteeBanner;