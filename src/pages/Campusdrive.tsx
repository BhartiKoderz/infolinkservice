import React from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";

const campusDrives = [
  {
    id: 1,
    college: "Agnihotri College of Engineering, Wardha",
    year: "2017",
    students: "1200+",
    location: "Wardha, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1588075592405-0167f0f6cc6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    college: "Wainganga College of Engineering",
    year: "2018",
    students: "1500+",
    location: "Nagpur, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    college: "KDK College of Engineering",
    year: "2021",
    students: "2000+",
    location: "Nagpur, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    college: "KITS College of Engineering",
    year: "2023",
    students: "1800+",
    location: "Ramtek, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
  },
];

const CampusDrives = () => {
  return (
    <section id="campus-drives" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Campus <span className="text-[#1F497D]">Drives</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting students with leading companies through recruitment drives across top engineering colleges in Maharashtra.
          </p>
        </div>

        {/* Drives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {campusDrives.map((drive) => (
            <div
              key={drive.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={drive.image}
                alt={drive.college}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {drive.college}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-[#1F497D]" /> {drive.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-[#1F497D]" /> {drive.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-[#1F497D]" /> {drive.location}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-block mt-2 text-[#1F497D] font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Host a Campus Drive?
          </h3>
          <p className="text-gray-600 mb-6">
            Partner with us to bring career opportunities directly to your students.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#1F497D] hover:bg-[#163663] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampusDrives;
