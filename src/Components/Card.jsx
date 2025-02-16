function Card({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div
      className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="overflow-hidden rounded-xl">
        <a href="https://far-away-beryl.vercel.app/">
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 rounded-xl h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </a>
      </div>
      <h3 className="pt-5 text-2xl font-bold text-gray-900 block">{heading}</h3>
      <p className="font-normal text-gray-600 text-lg mt-2">{description}</p>
      <div className="flex items-center justify-around p-2 space-x-1">
        <button className="bg-gray-900 px-6 py-2 text-white hover:bg-gray-800 duration-200 rounded-lg cursor-pointer transition-colors">
          <a href="https://far-away-beryl.vercel.app/">Demo</a>
        </button>
        <button className="border-2 border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-900 hover:text-white duration-200 rounded-lg cursor-pointer transition-colors">
          <a href="https://github.com/MohamedElgazwy/far-away">Code</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
