import AboutBanner from '../sections/AboutSection/AboutBanner'
import AboutContent from '../sections/AboutSection/AboutContent'
import MissionVision from '../sections/AboutSection/MissionVision'


function Aboutpage() {
  const title = "About Us";
  return (
    <div>
        <AboutBanner title={title}/>
        <AboutContent/>
        <MissionVision/>
    </div>
  )
}

export default Aboutpage