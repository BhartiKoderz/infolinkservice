import { BookOpen } from "lucide-react";
import trainingbanner from "../../assests/job-fair-images/trainingbanner.jpg";

// Import video & images

import training1img from "../../assests/job-fair-images/training1img.png";
import trainin2img from "../../assests/job-fair-images/trainin2img.png";
import trainingv from "../../assests/job-fair-images/trainingv.mp4";
const trainingPrograms = [
  { title: "HR Training", description: "Learn recruitment, HR policies, performance management, and employee engagement.", color: "text-blue-600" },
  { title: "Aptitude Test", description: "Enhance reasoning, quantitative, and verbal skills to excel in competitive exams.", color: "text-green-600" },
  { title: "On Job Practical Training in Industries", description: "Gain hands-on experience with real-time projects and industrial exposure.", color: "text-purple-600" },
  { title: "Technical Training", description: "Master technical skills in programming, databases, and modern IT tools.", color: "text-red-600" },
  { title: "Soft Skill Training", description: "Improve communication, teamwork, problem-solving, and professional etiquette.", color: "text-yellow-600" },
  { title: "Banking Training Program", description: "Learn banking operations, finance basics, and interview preparation tips.", color: "text-pink-600" },
  { title: "Personality Development", description: "Boost confidence, leadership, and presentation skills for professional growth.", color: "text-indigo-600" },
  { title: "And Many More…", description: "Explore additional specialized training programs tailored to your career growth.", color: "text-gray-600" },
];

export default function Training() {
  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Banner */}
        <div className="w-full mb-12">
          <img
            src={trainingbanner}
            alt="Training Programs Banner"
            className="w-full h-64 md:h-40 lg:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Training <span className="text-[#1F497D]">Programs</span>
          </h2>

          {/* Description */}
          <p
            className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Explore our professional training programs designed to enhance your skills and knowledge.
            We offer a wide range of courses including technical, soft skills, banking, HR, and practical on-job training.
          </p>
        </div>

        {/* Video + Images Section */}
        <div className="mt-12 mb-16 flex gap-6 items-start">
  {/* Left side video */}
  <div className="flex-shrink-0">
    <video
      controls
      autoPlay={true}
      muted={false}
      loop={false}
      className="w-[200px] h-[300px] object-cover rounded-2xl shadow-xl border border-gray-300"
    >
      <source src={trainingv} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

          {/* Right side images */}
          <div className="flex gap-9 items-center">
  {/* Horizontal (wider) */}
  <div className="w-2/3">
              <img
                src={training1img}
                alt="Training related 1"
                className="w-full h-[180px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Image 2 - vertical */}
            <div className="w-2/7">
              <img
                src={trainin2img}
                alt="Training related 2"
                className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <BookOpen className={`mx-auto w-12 h-12 mb-4 ${program.color}`} />
              <h2
                className="text-xl font-semibold text-gray-700 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {program.title}
              </h2>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Courses We Offered Section */}
      <div className="text-center mt-16">
  <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-11"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Course We <span className="text-[#1F497D]">Offered</span>
          </h2>

  {/* Course Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      "Full Stack Developer",
      "Graphics Designer",
      "Python Developer",
      "Digital Marketing",
      "Java Developer",
      "MERN Stack",
      ".NET Developer",
      "MEAN Stack",
      "Data Analyst",
      "HR",
      "Software Tester",
      "Business Analyst",
    ].map((course, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-2 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-800">{course}</h3>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
}












