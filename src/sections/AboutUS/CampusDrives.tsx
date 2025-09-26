// src/sections/CampusDriveCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CampusDrive {
  college: string;
  date: string;
}

const campusDrives: CampusDrive[] = [
  { college: "Shri Shankarprasad Agnihotri College of Engineering, Wardha", date: "March 2016" },
  { college: "S. B. Jain Institute of Technology, Management & Research, Nagpur", date: "February 2016" },
  { college: "S. B. Jain Institute of Technology, Management & Research, Nagpur", date: "February 2018" },
  { college: "Kavikulguru Institute of Technology and Science, Ramtek", date: "March 2018" },
  { college: "G. H. Raisoni College of Engineering", date: "January 2018" },
  { college: "Wainganga College of Engineering and Management", date: "2018" },
];

const CampusDriveCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="pt-24 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Campus Drives
      </h1>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {campusDrives.map((drive, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition h-48 flex flex-col justify-center text-center">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">{drive.college}</h2>
              <p className="text-gray-600">{drive.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CampusDriveCarousel;



