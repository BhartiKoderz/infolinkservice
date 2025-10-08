import React from 'react'
import trainingbanner from "../../assests/job-fair-images/trainingbanner.jpg";
import bgimg from '../../assests/training-images/bgimg.svg'
import mblbanner from '../../assests/training-images/mblbg.svg'

function TrainingBanner() {
  return (
    <div className='  relative  pt-20  lg:pt-32  overflow-hidden'>
      <div
        className="hidden md:block w-full mb-12 relative flex h-full min-h-64 rounded-2xl "
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="relative z-10 flex items-center justify-start gap-10 h-full px-8 min-h-64">
          <h2 className="max-w-2xl uppercase text-white text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Training & <br />Placement <br /> Program
          </h2>
          <div className=' md:flex flex-col items-center justify-center text-center'>
            <button
              className='text-5xl bg-[#FBB142]  text-white font-extrabold px-4 py-1 rounded-2xl  transition'
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}
            >
              100%
            </button>
            <p className='text-3xl text-white font-extrabold'
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}
            >Job Guarantee</p>
            <p className='text-3xl text-white font-extrabold '
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}>On Legal
              <br />
              Stamp paper</p>
          </div>
        </div>
      </div>
      <div
        className=" md:hidden block w-full mb-12 relative p-5 h-full min-h-64 flex items-center justify-center rounded-2xl "
        style={{
          backgroundImage: `url(${mblbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full px-8 min-h-64">
          <h2 className="max-w-2xl uppercase text-white text-2xl font-bold mb-4 text-center ">
            Training & <br />Placement <br /> Program
          </h2>
          <div className=' md:flex flex-col items-center justify-center text-center'>
            <button
              className='text-3xl bg-[#FBB142]  text-white font-extrabold px-4 py-1 rounded-2xl  transition'
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}
            >
              100%
            </button>
            <p className='text-xl text-white font-extrabold'
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}
            >Job Guarantee</p>
            <p className='text-xl text-white font-extrabold '
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 2px 0 #464647ff, 1px 2px 0 #58585bff",
              }}>On Legal
              <br />
              Stamp paper</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingBanner