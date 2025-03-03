import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ title }) => {
  return (
    <footer className="text-center bg-blue-50 dark:bg-gray-800 dark:text-white">
      <div className="grid gap-7 md:flex items-center justify-around py-20 grid-cols-1 shadow-2xl">
        <div>
          <h1 className="uppercase text-2xl font-semibold">Location</h1>
          <p>Al Minya, Egypt</p>
        </div>
        <div>
          <h1 className="uppercase text-2xl font-semibold">Around the web</h1>
          <div className="space-x-2 md:flex items-center justify-between px-6 py-3">
            <a
              href="https://web.facebook.com/profile.php?id=100084591367906"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#3b5998" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-algazwy-3092031b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#3b5998" />
            </a>
            <a
              href="https://www.instagram.com/mohammed_algazwy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#3b5998" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="uppercase text-2xl font-semibold">
            Around freelancer
          </h1>
          <p>
            Freelance is a free to use, licensed <br /> Bootstrap theme created
            by Mohamed
          </p>
        </div>
      </div>
      <div className="py-3">
        <h3>Made By : {title}❤️</h3>
      </div>
    </footer>
  );
};

export default Footer;
