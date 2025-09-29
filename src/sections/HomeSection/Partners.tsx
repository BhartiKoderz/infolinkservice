import { Building2 } from "lucide-react";
import Slider from "react-slick";
import img1 from '../../assests/partners/BajajSteel.jpg';
import img2 from '../../assests/partners/RnRDataLex.jpg';
import img3 from '../../assests/partners/alacrity.png';
import img4 from '../../assests/partners/ciphertech.png';
import img5 from '../../assests/partners/disha.png';
import img6 from '../../assests/partners/gentech.png';
import img7 from '../../assests/partners/greenindia.png';
import img8 from '../../assests/partners/induslnd.jpg';
import img9 from '../../assests/partners/kapilanch.png';
import img10 from '../../assests/partners/karamtara.gif';
import img11 from '../../assests/partners/kotak.jpg';
import img12 from '../../assests/partners/legalforce.jpg';

function Partners() {


  const logos = [
    img7, img8, img9, img10, img11, img12
  ]

  const logos1 = [
    img1, img2, img3, img4, img5, img6,
  ]

  const settingsLTR = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  const settingsRTL = {
    ...settingsLTR,
    rtl: true, // reverses scroll direction
  };

  return (
    <section id="clients" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trusted<span className="text-[#1F497D]"> Partners</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We've built strong partnerships with industry leaders who trust us to deliver
            exceptional talent for their organizations.
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <Slider {...settingsLTR}>
            {logos1.map((logo, i) => (
              <div key={i} className="px-4">
                <img
                  src={logo}
                  alt={`Partner ${i}`}
                  className="mx-auto h-20 object-contain"
                />
              </div>
            ))}
          </Slider>

          {/* Row 2 - Right to Left */}
          <Slider {...settingsRTL}>
            {logos.map((logo, i) => (
              <div key={i} className="px-4">
                <img
                  src={logo}
                  alt={`Partner ${i}`}
                  className="mx-auto h-20 object-contain"
                />
              </div>
            ))}
          </Slider>

          {/* Row 3 - Left to Right */}
          <Slider {...settingsLTR}>
            {logos.map((logo, i) => (
              <div key={i} className="px-4">
                <img
                  src={logo}
                  alt={`Partner ${i}`}
                  className="mx-auto h-20 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="text-4xl font-bold text-[#1F497D] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                1000+
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Partner Companies</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold text-green-600 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                95%
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Placement Success Rate</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold text-purple-600 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                50K+
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
