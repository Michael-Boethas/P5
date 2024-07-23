import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ data }) {    // Réception des données du logement
  return (
    <Link to={`/rental/${data.id}`} className="card__link-rental">    {/* Lien vers le logement correspondant à la carte selectionnée */}
      <figure className="gallery__card">
        <img
          className="card__img-preview"
          src={data.cover}
          alt={data.title}
          title={data.title}
        />
        <figcaption className="card__caption">{data.title}</figcaption>
      </figure>
    </Link>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.any.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
