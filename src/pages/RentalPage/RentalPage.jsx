import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import rentalsList from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

export default function RentalPage() {
  const { rentalId } = useParams();

  const rentalInfo = rentalsList.find((rental) => rental.id === rentalId);
  // Découpage du tableau en une liste pour l'affichage
  const equipmentsList = rentalInfo.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <Slideshow pictures={rentalInfo.pictures} />
      <section className="rental-page__info-section">
        <div className="rental-page__summary">
          <header className="rental-page__header">
            <h1 className="rental-page__title">{rentalInfo.title}</h1>
            <span className="rental-page__location">{rentalInfo.location}</span>
            <div className="rental-page__tags">
              {rentalInfo.tags.map((tag, index) => (
                <span className="rental-page__tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="rental-page__host-rating">
            <Rating rating={rentalInfo.rating} />
            <Host
              name={rentalInfo.host.name}
              picture={rentalInfo.host.picture}
            />
          </div>
        </div>
        <div className="rental-page__collapse-container">
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
