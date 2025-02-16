import Card from "./Card";

function Cards() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 sm:p-8">
      <Card
        className="bg-green-600"
        heading="Far-away"
        description="Professional Trip Website use it anytime."
        thumbnailSrc="https://static.vecteezy.com/system/resources/previews/011/171/301/original/road-trip-vacation-by-car-on-mountain-highway-with-rocky-cliffs-view-concept-cartoon-illustration-vector.jpg"
      />
      <Card
        className="bg-white"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="/img/placeholder-1.jpg"
      />
      <Card
        className="bg-white"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="/img/placeholder-1.jpg"
      />
    </div>
  );
}

export default Cards;
