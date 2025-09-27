import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar, MapPin } from "lucide-react";

import agnihotri from "../../assests/job-fair-images/agnihotri-img.png";
import wainganga from "../../assests/job-fair-images/wainganga-img.png";
import kits from "../../assests/job-fair-images/kits-img.png";
import kdk from "../../assests/job-fair-images/kdk-img.png";

const jobFairs = [
  {
    title: "Campus Drive at Agnihotri College of Engineering",
    location: "Wardha",
    year: "2017",
    image: agnihotri,
  },
  {
    title: "Campus Drive at Wainganga College of Engineering",
    location: "Nagpur",
    year: "2018",
    image: wainganga,
  },
  {
    title: "Campus Drive at KDK College of Engineering",
    location: "Nagpur",
    year: "2021",
    image: kdk,
  },
  {
    title: "Job Fair conducted at KITS College of Engineering",
    location: "Ramtek",
    year: "2021",
    image: kits,
  },
];

const JobFairCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F497D] text-center mb-12">
          Our Job Fairs
        </h2>

        <Slider {...settings}>
          {jobFairs.map((fair, index) => (
            <div
              key={index}
              className="!flex !flex-col md:!flex-row !items-center gap-8 !w-full px-3 "
            >
              {/* Full Slide Background */}
              <div className="flex flex-col md:flex-row w-full bg-blue-100 p-6 rounded-2xl shadow-md items-center gap-8">
                
                {/* Content (40%) */}
                <div className="w-full md:w-2/5 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#1F497D] mb-4">
                    {fair.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex justify-center md:justify-start items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-300" /> {fair.location} |{" "}
                    <Calendar className="w-4 h-4 text-yellow-300" /> {fair.year}
                  </p>
                  <p className="text-gray-500">
                    Bringing students and companies together for career success.
                  </p>
                </div>

                {/* Image (60%) */}
                <div className="w-full md:w-3/5 flex justify-center">
                  <img
                    src={fair.image}
                    alt={fair.title}
                    className="rounded-xl shadow-lg w-full max-w-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default JobFairCarousel;
