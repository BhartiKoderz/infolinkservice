import React from "react";
import { Users, Briefcase, Target, BookOpen } from "lucide-react";

function BenefitsSection() {
  const benefits = [
    {
      icon: <Users className="w-10 h-10 text-yellow-300 mx-auto" />,
      title: "Network with Top Companies",
      description: "Connect directly with hiring managers from leading organizations",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-yellow-300 mx-auto" />,
      title: "On-the-Spot Opportunities",
      description: "Get interview calls and job offers during the event",
    },
    {
      icon: <Target className="w-10 h-10 text-yellow-300 mx-auto" />,
      title: "Career Guidance",
      description: "Receive expert advice on career paths and skill development",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-300 mx-auto" />,
      title: "Skill Workshops",
      description: "Participate in resume building and interview preparation sessions",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1F497D] mb-4">
          Why Attend Our Job Fairs?
        </h2>
        <p className="text-gray-600 mb-12">
          Maximize your career potential with these benefits
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
