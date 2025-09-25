import JobFairCarousel from '../sections/JobFairSection/JobFairCarousal'
import JobFairBanner from '../sections/JobFairSection/JobFairBanner'
import UpcomingJobFairs from "../sections/JobFairSection/UpcomingJobFairs"
import BenefitsSection from '../sections/JobFairSection/BenefitsSection'

function Jobfairpage() {
  return (
    <div>
      <JobFairBanner/>
        <JobFairCarousel/>
        <UpcomingJobFairs/>
        <BenefitsSection/>
    </div>
  )
}

export default Jobfairpage