
import Banner from '../sections/HomeSection/Banner'
import About from '../sections/HomeSection/About'
import Services from '../sections/HomeSection/Services'
import Partners from '../sections/HomeSection/Partners'
import Testimonials from '../sections/HomeSection/Testimonials'
import Campusdrive from '../sections/HomeSection/Campusdrive'
import CTABanner from '../components/CTABanner'
import GuaranteeBanner from '../components/GuranteeBanner'


function Homepage() {
  const bannersData = [
    {
      title: "Building Careers & Connecting Talent",
      imageSrc: "https://via.placeholder.com/800x600/2980b9/FFFFFF?text=Talent+Connection", // Placeholder
      altText: "Professionals collaborating and connecting",
      gradientFrom: "from-blue-300",
      gradientTo: "to-green-300",
      bgColorFrom: "from-[#1F497D]", // Deep blue
      bgColorTo: "to-blue-900" // Even deeper blue
    },
    {
      title: "Empowering Professionals for Success",
      imageSrc: "https://via.placeholder.com/800x600/e67e22/FFFFFF?text=Success+Journey", // Placeholder
      altText: "Person climbing stairs of success",
      gradientFrom: "from-yellow-300",
      gradientTo: "to-orange-400",
      bgColorFrom: "from-purple-800", // Dark purple
      bgColorTo: "to-indigo-900" // Dark indigo
    },
    {
      title: "...Stop Searching, Start Working...",
      imageSrc: "https://via.placeholder.com/800x600/27ae60/FFFFFF?text=Start+Working", // Placeholder
      altText: "Happy person landing a new job",
      gradientFrom: "from-lime-300",
      gradientTo: "to-teal-300",
      bgColorFrom: "from-gray-800", // Dark gray
      bgColorTo: "to-gray-900" // Blackish gray
    }
  ];

  return (
    <div>
      <Banner />
      <GuaranteeBanner/>
      <About />
      <Services />
      <CTABanner />
      <Partners />
      <Campusdrive />
      <Testimonials />
    </div>
  )
}

export default Homepage