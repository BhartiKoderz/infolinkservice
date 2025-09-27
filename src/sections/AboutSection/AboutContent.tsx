import { Users, Award, Building2 } from "lucide-react";

const AboutContent = () => {
  return (
    <section id="about" className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About <span className="text-[#1F497D]">Us</span>
          </h2>
          <p
            className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            With over a decade of experience, INFOLINK has become a pioneer in
            bridging the gap between education and employment through HR solutions,
            executive recruitment, training programs, and mega job fairs across
            Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="group">
            <img
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional team meeting"
              className="rounded-2xl shadow-2xl transform transition duration-500 group-hover:rotate-3 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Careers Since 2010
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              INFOLINK was established on the 20th of July, 2010, with an objective
              of providing HR and Placement Solutions in the corporate world as well
              as jobs to needy persons from rural areas. In just 13 years, we have
              grown into Nagpur’s largest manpower provider and job fair organizer —
              trusted by more than 1000 industries and thousands of job seekers.
            </p>

            {/* Achievements List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">13+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">50,000+ Successful Placements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-5 w-5  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">1000+ Partner Industries</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#1F497D]" />
                </div>
                <span className="text-gray-700">100+ Job Fairs Conducted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#1F497D]" />
                </div>
                <span className="text-gray-700">Strong Team of 50 Employees</span>
              </div>
            </div>

            {/* Mission Highlight */}
            <div className="mt-8 bg-gradient-to-r from-yellow-200 to-yellow-100 border-l-4 border-[#1F497D] p-4 rounded-lg shadow-sm">
              <p className="text-lg text-gray-800 font-semibold italic">
                “MISSION: Unemployment-Free India & Rural Development.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutContent;
