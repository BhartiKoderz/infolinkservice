import { GraduationCap, BookOpen, Briefcase } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#f0f0f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your career journey and
            help companies find the perfect talent match.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Campus Drives */}
          <div className="p-8 rounded-2xl bg-[#f0f0f3] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#f0f0f3] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <GraduationCap className="h-8 w-8 text-[#1F497D]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Campus Drives
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Organize comprehensive campus recruitment drives connecting fresh graduates
              with leading companies across industries.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Pre-placement training</li>
              <li>• Multiple company visits</li>
              <li>• Interview coordination</li>
            </ul>
          </div>

          {/* Training Programs */}
          <div className="p-8 rounded-2xl bg-[#f0f0f3] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#f0f0f3] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Training Programs
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive skill development programs designed to enhance employability
              and prepare candidates for industry requirements.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Technical skill development</li>
              <li>• Soft skills training</li>
              <li>• Industry certifications</li>
            </ul>
          </div>

          {/* Job Placement */}
          <div className="p-8 rounded-2xl bg-[#f0f0f3] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#f0f0f3] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Briefcase className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Job Placement
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Personalized job placement services matching candidates with the right
              opportunities based on skills, experience, and career goals.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Career counseling</li>
              <li>• Resume optimization</li>
              <li>• Interview preparation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
