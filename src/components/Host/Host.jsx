import React from "react";
import PropTypes from "prop-types";

export default function Host({ name, picture }) {
  return (
    <figure className="rental__host">
      <figcaption className="host__name">{name}</figcaption>
      <img className="host__picture" src={picture} alt={"Hôte: " + name} />
    </figure>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
