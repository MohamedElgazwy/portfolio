import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AfterBefore from "../Components/AfterBefore/AfterBefore";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <div className="text-center text-4xl uppercase font-medium text-neutral-800  m-10">
        <h1>about component</h1>
      </div>
      <div className="grid grid-cols-1 ml-30 md:grid-cols-2 px-8 py-5 space-x-4 text-2xl text-gray-800">
        <div className=" space-y-6">
          <p className="text-gray-900 leading-relaxed font-sans mb-6">
            My name is Mohamed Farag, and I bring extensive experience in web
            development and design. I thrive on tackling challenges, embracing
            innovation, and thinking creatively to deliver exceptional results.
            My focus is on crafting visually appealing and immersive web
            experiences by writing clean, user-centric code. I am deeply
            passionate about my work and continuously seek opportunities to
            enhance my skills and expand my expertise.
          </p>
          <p>Key responsibilities in my role include:</p>
          <p>
            1- Designing and developing websites and landing pages from the
            ground up.
          </p>
          <p>
            2- Delivering professional, fully responsive websites optimized for
            all devices.
          </p>
          <p>
            3- Implementing responsive design techniques, including media
            queries.
          </p>
        </div>
        <div className="ml-3 px-3">
          <ul className="px-3 space-y-6 uppercase">
            <li className="text-3xl font-semibold mb-4">Technical Skills</li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-3" />
              HTML / HTML5
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-3" />
              CSS / CSS3
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-3" />
              JavaScript
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-3" />
              Bootstrap
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-3" />
              React
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
