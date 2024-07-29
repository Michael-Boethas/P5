import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import rentalsList from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

export default function RentalPage() {
  const { rentalId } = useParams(); // Capture de l'id en paramètre URL
  const rental = rentalsList.find((rental) => rental.id === rentalId); // Recherche de l'id dans la liste des logements

  if (!rental) {
    return <Navigate to="/404" />; // Redirection vers la page d'erreur en cas d'id non valide
  }

  // Découpage du tableau en une liste pour l'affichage dans le dropdown
  const equipmentsList = rental.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <Slideshow picturesUrl={rental.pictures} />{" "}
      {/* URL des images en props pour le caroussel */}
      <section className="rental-page__info-section">
        <div className="rental-page__summary">
          <header className="rental-page__header">
            <h1 className="rental-page__title">{rental.title}</h1>
            <span className="rental-page__location">{rental.location}</span>
            <div className="rental-page__tags">
              {/* Itération sur les tags */}
              {rental.tags.map((tag, index) => (
                <span className="rental-page__tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="rental-page__host-rating">
            <Rating rating={rental.rating} />
            <Host name={rental.host.name} picture={rental.host.picture} />
          </div>
        </div>
        <div className="rental-page__collapse-container">
          <Collapse heading="Description" text={<p>{rental.description}</p>} />   {/* Heading et contenu en props pour les dropdowns */}
          <Collapse heading="Équipements" text={<ul>{equipmentsList}</ul>} />
        </div>
      </section>
    </>
  );
}
