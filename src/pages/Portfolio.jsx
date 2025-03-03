// Portfolio.jsx
import Cards from "../Components/Cards";

const Portfolio = () => {
  return (
    <section className="container mx-auto p-8 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 dark:text-white">
        Portfolio
      </h2>
      <Cards />
    </section>
  );
};

export default Portfolio;
