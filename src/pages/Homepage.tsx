
import Banner from '../sections/HomeSection/Banner'
import About from '../sections/HomeSection/About'
import Services from '../sections/HomeSection/Services'
import Partners from '../sections/HomeSection/Partners'
import Testimonials from '../sections/HomeSection/Testimonials'
import Campusdrive from '../sections/HomeSection/Campusdrive'
import CTABanner from '../components/CTABanner'


function Homepage() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <CTABanner/>
      <Partners />
      <Campusdrive />
      <Testimonials />
    </div>
  )
}

export default Homepage