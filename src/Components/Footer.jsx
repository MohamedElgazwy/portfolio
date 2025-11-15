// Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-16">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between px-4 sm:px-6 gap-6 sm:gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-bold">Mohamed Aljazwi</h2>
          <p className="text-sm sm:text-base text-gray-400">
            Fullstack Developer | React • Next.js • Express • Node.js • MongoDB
          </p>
        </div>

        <div className="flex space-x-6 text-xl sm:text-2xl">
          <a
            href="https://github.com/MohammedAlMayhoub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-al-mayhoub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100084591367906"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/mohammed_algazwy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} Built with ❤️ by Mohamed Aljazwi
      </p>
    </footer>
  );
};

export default Footer;
