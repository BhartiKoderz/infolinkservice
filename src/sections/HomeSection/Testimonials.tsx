
import { Star, Users } from "lucide-react";
import { useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at TechCorp",
      content:
        "PlacePro's training program and placement services transformed my career. The personalized guidance and industry connections helped me land my dream job.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Analyst at GlobalSoft",
      content:
        "The campus drive organized by PlacePro was incredibly well-structured. From preparation to final placement, everything was handled professionally.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager at InnovateLabs",
      content:
        "Thanks to PlacePro's comprehensive training and support, I successfully transitioned from academia to the corporate world. Highly recommended!",
      rating: 5,
    },
  ];

  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our<span className="text-[#1F497D]"> Testimonials</span>
        </h2>
        <p
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Hear from our successful candidates and partner companies about their experience with Infolinks.
        </p>
        <div className="elfsight-app-26f6e67b-24fe-4693-8d56-f26296e65193" data-elfsight-app-lazy></div>
        {/* Section Heading */}
        {/* <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Sucess<span className="text-[#1F497D]"> Stories</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hear from our successful candidates and partner companies about their experience with PlacePro.
          </p>
        </div> */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
             
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

           
              <p
                className="text-gray-600 mb-6 leading-relaxed italic"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                "{testimonial.content}"
              </p>

             
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#1F497D]" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Testimonials;
