import React from 'react'
import trainingbanner from "../../assests/job-fair-images/trainingbanner.jpg";

function TrainingBanner() {
  return (
    <div className=' min-h-64 relative  pt-20  lg:pt-32  overflow-hidden'>
      <div className="w-full mb-12">
          <img
            src={trainingbanner}
            alt="Training Programs Banner"
            className="w-full h-64  object-cover rounded-2xl shadow-lg"
          />
        </div>
        </div>
  )
}

export default TrainingBanner