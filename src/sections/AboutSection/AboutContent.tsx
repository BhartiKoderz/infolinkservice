import { Users, Award, Building2 } from "lucide-react";

const AboutContent = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F497D] mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience, we're the leading placement and
            training firm dedicated to bridging the gap between education and
            employment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional team meeting"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Careers Since 2010
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in creating meaningful connections between talented
              individuals and leading companies. Our comprehensive approach
              combines industry expertise with personalized guidance to ensure
              successful career transitions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">10+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">
                  50,000+ Successful Placements
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4  text-[#1F497D]" />
                </div>
                <span className="text-gray-700">500+ Partner Companies</span>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-yellow-300 p-4 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                “Our mission: Unemployment-Free India and Rural Development.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
