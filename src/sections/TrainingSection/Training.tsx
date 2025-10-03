import { BookOpen } from "lucide-react";
import trainingbanner from "../../assests/job-fair-images/trainingbanner.jpg";

// Import video & images
import trainingpvideo from "../../assests/job-fair-images/trainingvideo.mp4";
import trainingimg from "../../assests/job-fair-images/trainingimg.png";
import trainingimg1 from "../../assests/job-fair-images/trainingimg1.png";
import training1img from "../../assests/job-fair-images/training1img.png";
import trainin2img from "../../assests/job-fair-images/trainin2img.png";
import trainingv from "../../assests/job-fair-images/trainingv.mp4";
import TrainingBanner from "./TrainingBanner";
import TrainingCarousel from "./TrainingCarousel";
import CoursesOffered from "./CoursesOffered";

// Import Framer Motion
import { motion } from "framer-motion";

const trainingPrograms = [
  { 
    title: "IT Training", 
    description: "Explore additional specialized training programs tailored to your career growth.", 
    color: "text-gray-800",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
{
  title: "HR Training",
    description: "Learn recruitment, HR policies, performance management, and employee engagement.",
    color: "text-blue-600",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Banking & Finance Training",
    description: "Develop skills in banking processes, customer service, and home loan management.",
    color: "text-green-1200",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Aptitude Test", 
    description: "Enhance reasoning, quantitative, and verbal skills to excel in competitive exams.", 
    color: "text-green-800",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Practical Training in Industries",
    description: "Gain hands-on experience with real-time projects and industrial exposure.",
    color: "text-purple-00",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
  },

  { 
    title: "Technical Training", 
    description: "Master technical skills in programming, databases, and modern IT tools.", 
    color: "text-red-1000",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Soft Skill Training", 
    description: "Improve communication, teamwork, problem-solving, and professional etiquette.", 
    color: "text-yellow-1000",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Personality Development",
    description: "Boost confidence, leadership, and presentation skills for professional growth.",
    color: "text-indigo-1000",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Training() {
  return (
    <div className="min-h-screen pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <TrainingBanner />

        {/* Heading */}
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {trainingPrograms.map((program, index) => (
    <motion.div
      key={index}
      className="relative shadow-lg rounded-2xl overflow-hidden group h-60 flex items-end"
      style={{
        backgroundImage: `url(${program.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      {/* Dark bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t h-full from-black/100 to-transparent pointer-events-none"></div>

      {/* Title & Description in plain white */}
      <div className="relative p-4 text-center text-white z-10">
        <h2 className="text-lg font-semibold mb-1">{program.title}</h2>
        <p className="text-sm">{program.description}</p>
      </div>
    </motion.div>
  ))}
</div>




       

        <CoursesOffered />
      </div>
    </div>
  );
}













