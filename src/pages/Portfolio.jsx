// Portfolio.jsx
import { motion } from "framer-motion";
import Cards from "../Components/ProjectsGrid";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400"
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Cards />
      </motion.div>
    </section>
  );
};

export default Portfolio;
