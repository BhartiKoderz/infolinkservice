
import Banner from '../sections/HomeSection/Banner'
import About from '../sections/HomeSection/About'
import Services from '../sections/HomeSection/Services'
import Partners from '../sections/HomeSection/Partners'
import Testimonials from '../sections/HomeSection/Testimonials'

function Homepage() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Partners/>
      <Testimonials/>
    </div>
  )
}

export default Homepage