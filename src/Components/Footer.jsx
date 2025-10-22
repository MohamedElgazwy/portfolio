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
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        <div>
          <h2 className="text-xl font-bold">Mohammed AlJazwi</h2>
          <p className="text-gray-400">
            Frontend Developer | React • Next.js • Tailwind CSS
          </p>
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/MohammedAlMayhoub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-al-mayhoub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100084591367906"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/mohammed_algazwy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Built with ❤️ by Mohammed Aljazwi
      </p>
    </footer>
  );
};

export default Footer;
