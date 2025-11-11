// About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-emerald-600 dark:text-emerald-400"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-center text-lg leading-relaxed"
      >
        <p>
          Hello! I'm{" "}
          <span className="font-semibold text-emerald-600">
            Mohammed Aljazwi
          </span>
          , a fullstack developer from Libya. I’m currently studying at the
          Faculty of Computer Science, Minia University, and also work as a{" "}
          <span className="font-semibold">
            Frontend Instructor at eta_Platform
          </span>
          .
        </p>

        <p className="mt-6">
          I’m passionate about creating smooth, responsive, and high-quality web
          experiences using <strong>React.js</strong>, <strong>Next.js</strong>,
          and <strong>Tailwind CSS</strong>. My goal is to build modern digital
          products that combine design elegance with functionality.
        </p>

        <p className="mt-6">
          When I’m not coding, I enjoy teaching, mentoring students, and
          improving my English skills through daily speaking practice.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
