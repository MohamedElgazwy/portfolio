import CardProject from "./CardProject";

function ProjectsGrid() {
  const projects = [
    {
      heading: "Far Away",
      description: "A trip planning web app built with React & Tailwind CSS.",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://far-away-beryl.vercel.app/",
      codeLink: "https://github.com/MohamedElgazwy/far-away",
    },
    {
      heading: "Shopping Website",
      description:
        "A full e-commerce website built with Next.js featuring authentication, cart, and responsive design.",
      thumbnailSrc:
        "https://media.wired.com/photos/5c9040ee4950d24718d6da99/16:9/w_2400,h_1350,c_limit/shoppingcart-1066110386.jpg",
      demoLink: "https://my-shop-nextjs.vercel.app",
      codeLink: "https://github.com/MohamedElgazwy/my-shop-nextjs",
    },
    {
      heading: "Pizzeria",
      description:
        "An interactive pizza ordering interface built using React with responsive layout and real-time ordering UI.",
      thumbnailSrc:
        "https://media.istockphoto.com/id/899907172/photo/baked-tasty-margerita-pizza-near-oven.jpg?s=612x612&w=0&k=20&c=r3J2p-ixkOCZG2VejNxN-CvMHnQhhkOSSh0C9fStV0g=",
      demoLink: "https://pizzeria-alpha.vercel.app",
      codeLink: "https://github.com/MohamedElgazwy/Pizzeria",
    },
    {
      heading: "Workout App",
      description:
        "A fitness tracker built using React. Manage workouts dynamically with responsive UI.",
      thumbnailSrc:
        "https://cdn.gymaholic.co/articles/21-day-calisthenics-workout-to-kickstart-your-fitness-journey/man-plank.jpg",
      demoLink: "https://workout-five-gamma.vercel.app",
      codeLink: "https://github.com/MohamedElgazwy/Workout",
    },
    {
      heading: "usePopcorn - Movie Explorer App",
      description:
        "Search, explore, and rate movies using OMDB API with clean, modern UI.",
      thumbnailSrc:
        "https://offloadmedia.feverup.com/secretatlanta.co/wp-content/uploads/2025/01/09095000/shutterstock_2347856967-1024x683.jpg",
      demoLink: "https://usepopcorn-fawn-gamma.vercel.app",
      codeLink: "https://github.com/MohamedElgazwy/usepopcorn",
    },
    {
      heading: "Quiz App",
      description:
        "A modern React quiz app to test your knowledge interactively.",
      thumbnailSrc:
        "https://unityassetcollection.com/wp-content/uploads/2020/08/QuizApp-Trivia-Template-3.0.jpg",
      demoLink: "https://usepopcorn-fawn-gamma.vercel.app",
      codeLink: "https://github.com/MohamedElgazwy/quiz-app",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-teal-400 mb-12 drop-shadow-lg">
        My Projects
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <CardProject key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
