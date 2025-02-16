import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ title }) => {
  return (
    <footer className="text-center bg-blue-50">
      <div className="grid gap-7 md:flex  items-center justify-around py-20 grid-cols-1 shadow-2xl ">
        <div className="">
          <h1 className="uppercase text-2xl font-semibold text-gray-900">
            Location
          </h1>
          <p>Al Minya, Egypt</p>
        </div>
        <div className="">
          <h1 className="uppercase text-2xl font-semibold text-gray-900">
            Around the web
          </h1>
          <div className="space-x-2 md:flex items-center justify-between px-6 py-3">
            <a href="">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#3b5998" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#3b5998" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#3b5998" />
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="uppercase text-2xl font-semibold text-gray-900">
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
