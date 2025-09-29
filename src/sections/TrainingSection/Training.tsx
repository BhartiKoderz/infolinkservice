import { BookOpen } from "lucide-react";
import trainingbanner from "../../assests/job-fair-images/trainingbanner.jpg";

// Import video & images
import trainingpvideo from "../../assests/job-fair-images/trainingpvideo.mp4";
import training1img from "../../assests/job-fair-images/training1img.png";
import trainin2img from "../../assests/job-fair-images/trainin2img.png";

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
        {/* Video + Images Section (Professional Layout) */}
        <div className="mt-12 mb-16 grid md:grid-cols-2  items-left">
          {/* Left side video (vertical style) */}
          <div className="w-full flex justify-center">
            <video
              src={trainingpvideo}
              controls
              className="w-[200px] h-[350px] object-cover rounded-2xl shadow-xl border border-gray-300"
            />
          </div>

          {/* Right side images (side by side) */}
          <div className="grid grid-cols-2 gap-9 justify-center">
            <img
              src={training1img}
              alt="Training related 1"
              className="w-full h-[120px] object-cover rounded-2xl shadow-lg"
            />
            <img
              src={trainin2img}
              alt="Training related 2"
              className="w-full h-[240px] object-cover rounded-2xl shadow-lg"
            />
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

          {/* Courses We Offer Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1 col-span-full max-w-3xl mx-auto">
            <BookOpen className="mx-auto w-12 h-12 mb-4 text-blue-600" />
            <h2
              className="text-2xl font-bold mb-4 text-blue-700"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Courses We Offer
            </h2>
            {/* Two-column course list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-left text-sm md:text-base">
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Full Stack Developer</li>
                <li>Graphics Designer</li>
                <li>Python Developer</li>
                <li>Digital Marketing</li>
                <li>Java Developer</li>
                <li>MERN Stack</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>.NET Developer</li>
                <li>MEAN Stack</li>
                <li>Data Analyst</li>
                <li>HR</li>
                <li>Software Tester</li>
                <li>Business Analyst</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












