import { Calendar, MapPin, Building2 } from "lucide-react";

function UpcomingJobFairs() {
  const upcomingFairs = [
    {
      date: "March 15, 2025",
      title: "Tech Job Fair 2025",
      location: "Mumbai",
      description: "Focus on IT and software development roles",
      companies: ["Google", "Microsoft", "Amazon", "Infosys"]
    },
    {
      date: "April 20, 2025",
      title: "Engineering Campus Drive",
      location: "Pune",
      description: "Exclusive for engineering graduates",
      companies: ["TATA", "L&T", "Mahindra", "Siemens"]
    },
    {
      date: "March 15, 2025",
      title: "Tech Job Fair 2025",
      location: "Mumbai",
      description: "Focus on IT and software development roles",
      companies: ["Google", "Microsoft", "Amazon", "Infosys"]
    },
    {
      date: "April 20, 2025",
      title: "Engineering Campus Drive",
      location: "Pune",
      description: "Exclusive for engineering graduates",
      companies: ["TATA", "L&T", "Mahindra", "Siemens"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1F497D] text-center mb-4">
          Upcoming Job Fairs
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Mark your calendar for these exciting opportunities
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingFairs.map((fair, index) => (
            <div 
              key={index} 
              className="border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 bg-yellow-300 text-[#1F497D] px-4 py-2 rounded-full text-sm font-semibold w-fit mb-4">
                <Calendar className="w-4 h-4 " />
                {fair.date}
              </div>
              <h3 className="text-2xl font-bold text-[#1F497D] mb-2">{fair.title}</h3>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" /> {fair.location}
              </p>
              <p className="text-gray-700 mb-4">{fair.description}</p>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-yellow-400" /> Participating Companies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fair.companies.map((company, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              {/* <button className="mt-6 bg-[#1F497D] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingJobFairs;
