// Home.jsx
import KasrAlneelPicture from "../assets/KasrAlneel.jpg";
import AfterBefore from "../Components/AfterBefore/AfterBefore";
import { ReactTyped } from "react-typed";

const Home = ({ title }) => {
  return (
    <div className="p-8 flex items-center justify-center dark:bg-gray-800 dark:text-white">
      <div>
        <img
          src={KasrAlneelPicture}
          alt=""
          className="w-70 h-70 rounded-full object-cover border-amber-90"
        />
        <div className="flex items-center justify-center font-semibold text-3xl text-neutral-600 dark:text-white">
          <AfterBefore title={title} />
        </div>
        <div className="text-center text-black fs-2 pt-3 text-3xl dark:text-white">
          <ReactTyped
            strings={["Web Designer", "Front-End Developer", "Web Development"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          ></ReactTyped>
        </div>
      </div>
    </div>
  );
};

export default Home;
