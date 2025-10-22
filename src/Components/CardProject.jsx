import { motion } from "framer-motion";

function CardProject({
  heading,
  description,
  thumbnailSrc,
  demoLink,
  codeLink,
}) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-56 overflow-hidden">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={thumbnailSrc}
            alt={heading}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </a>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{heading}</h3>
        <p className="text-gray-300">{description}</p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-5 py-2 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
