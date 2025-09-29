import Slider from "react-slick";

function Partners() {
  // Import all images inside trustedpartners folder
  const logos = Object.values(
    import.meta.glob("../../assests/trustedpartners/*.{png,jpg,jpeg,svg}", {
      eager: true,
      import: "default",
    })
  );

  // Split into 3 rows
  const logos1 = logos.slice(0, Math.ceil(logos.length / 3));
  const logos2 = logos.slice(Math.ceil(logos.length / 3), Math.ceil((2 * logos.length) / 3));
  const logos3 = logos.slice(Math.ceil((2 * logos.length) / 3));




  const settingsLTR = {
    infinite: true,
    slidesToShow: 7,
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
                  <img src={logo as string} alt={`Partner ${i}`} className="mx-auto h-20 object-contain" />
                </div>
              ))}
            </Slider>

           {/* Row 2 - Right to Left */}
          <Slider {...settingsRTL}>
            {logos2.map((logo, i) => (
              <div key={i} className="px-4">
                <img src={logo as string} alt={`Partner ${i}`} className="mx-auto h-20 object-contain" />
              </div>
            ))}
          </Slider>

          {/* Row 3 - Left to Right */}
          <Slider {...settingsLTR}>
            {logos3.map((logo, i) => (
              <div key={i} className="px-4">
                <img src={logo as string} alt={`Partner ${i}`} className="mx-auto h-20 object-contain" />
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
