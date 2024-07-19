import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import rentalsList from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

export default function RentalPage() {
  const { id } = useParams();

  const rentalInfo = rentalsList.find((rental) => rental.id === id);
  // Découpage du tableau en une liste pour l'affichage
  const equipmentsList = rentalInfo.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <Slideshow pictures={rentalInfo.pictures} />
      <section className="rental__info-section">
        <div className="rental__title-tags-container">
          <h1 className="rental__title">{rentalInfo.title}</h1>
          <span className="rental__location">{rentalInfo.location}</span>
          <div className="rental__tags-container">
            {rentalInfo.tags.map((tag, index) => (
              <span className="rental__tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rental__host-rating-container">
          <Rating rating={rentalInfo.rating} />
          <Host name={rentalInfo.host.name} picture={rentalInfo.host.picture} />
        </div>
        <div className="rental__collapse-container">
          <Collapse
            heading="Description"
            text={<p>{rentalInfo.description}</p>}
          />
          <Collapse heading="Équipements" text={<ul>{equipmentsList}</ul>} />
        </div>
      </section>
    </>
  );
}
