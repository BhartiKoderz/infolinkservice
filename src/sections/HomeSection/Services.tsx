import { GraduationCap, BookOpen, Briefcase } from "lucide-react";

const Services = () => {
  return (
      <section id="services" className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our <span className="text-[#1F497D]">Services</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Comprehensive solutions designed to accelerate your career journey and help companies
            find the perfect talent match.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Campus Drives */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="h-8 w-8 text-[#1F497D]" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Campus Drives
            </h3>
            <p
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Organize comprehensive campus recruitment drives connecting fresh graduates
              with leading companies across various industries.
            </p>
            <ul className="space-y-2 text-gray-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span>Pre-placement training</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span>Multiple company visits</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span>Interview coordination</span>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Training Programs
            </h3>
            <p
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Comprehensive skill development programs designed to enhance employability
              and prepare candidates for industry requirements.
            </p>
            <ul className="space-y-2 text-gray-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Technical skill development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Soft skills training</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Industry certifications</span>
              </li>
            </ul>
          </div>

          {/* Job Placement */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-purple-600" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Job Placement
            </h3>
            <p
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Personalized job placement services matching candidates with the right opportunities
              based on skills, experience, and career goals.
            </p>
            <ul className="space-y-2 text-gray-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Career counseling</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Resume optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Interview preparation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
