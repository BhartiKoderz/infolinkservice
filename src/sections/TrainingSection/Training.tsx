import { BookOpen } from "lucide-react";

const trainingPrograms = [
  {
    title: "HR Training",
    description: "Learn recruitment, HR policies, performance management, and employee engagement.",
    color: "text-blue-600",
  },
  {
    title: "Aptitude Test",
    description: "Enhance reasoning, quantitative, and verbal skills to excel in competitive exams.",
    color: "text-green-600",
  },
  {
    title: "On Job Practical Training in Industries",
    description: "Gain hands-on experience with real-time projects and industrial exposure.",
    color: "text-purple-600",
  },
  {
    title: "Technical Training",
    description: "Master technical skills in programming, databases, and modern IT tools.",
    color: "text-red-600",
  },
  {
    title: "Soft Skill Training",
    description: "Improve communication, teamwork, problem-solving, and professional etiquette.",
    color: "text-yellow-600",
  },
  {
    title: "Banking Training Program",
    description: "Learn banking operations, finance basics, and interview preparation tips.",
    color: "text-pink-600",
  },
  {
    title: "Personality Development",
    description: "Boost confidence, leadership, and presentation skills for professional growth.",
    color: "text-indigo-600",
  },
  {
    title: "And Many More…",
    description: "Explore additional specialized training programs tailored to your career growth.",
    color: "text-gray-600",
  },
];

export default function Training() {
  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Training Programs
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our professional training programs designed to enhance your skills and knowledge.
          We offer a wide range of courses including technical, soft skills, banking, HR, and practical on-job training.
        </p>

        {/* Training Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <BookOpen className={`mx-auto w-12 h-12 mb-4 ${program.color}`} />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{program.title}</h2>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

