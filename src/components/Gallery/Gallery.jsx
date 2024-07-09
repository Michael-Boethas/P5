import Card from "../Card/Card.jsx";
import rentalsList from "../../data/logements.json";
import "../../styles/components/_Gallery.scss";

export default function Gallery() {
  return (
    <section className="gallery">
      {rentalsList.map((rentalInfo) => (
        <Card key={rentalInfo.id} data={rentalInfo} />
      ))}
    </section>
  );
}
