import { motion } from "framer-motion";

const Stats = () => {
  // parent container animation (stagger children)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // child card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 mt-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center"
        variants={item}
      >
        <span className="text-xl font-bold text-[#1F497D]">1000+</span>
        <span className="text-gray-600 font-medium text-sm mt-2 text-center">
          Industries Connected
        </span>
      </motion.div>

      <motion.div
        className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center"
        variants={item}
      >
        <span className="text-xl font-bold text-[#1F497D]">50,000+</span>
        <span className="text-gray-600 font-medium text-sm mt-2 text-center">
          Placements Achieved
        </span>
      </motion.div>

      <motion.div
        className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center"
        variants={item}
      >
        <span className="text-xl font-bold text-[#1F497D]">13+</span>
        <span className="text-gray-600 font-medium text-sm mt-2 text-center">
          Years of Excellence
        </span>
      </motion.div>

      <motion.div
        className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center"
        variants={item}
      >
        <span className="text-xl font-bold text-[#1F497D]">100+</span>
        <span className="text-gray-600 font-medium text-sm mt-2 text-center">
          Job Fairs Conducted
        </span>
      </motion.div>

      <motion.div
        className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center"
        variants={item}
      >
        <span className="text-xl font-bold text-[#1F497D]">50+</span>
        <span className="text-gray-600 font-medium text-sm mt-2 text-center">
          Strong Team of Employees
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
