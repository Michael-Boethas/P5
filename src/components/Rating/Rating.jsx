import React from "react";
import PropTypes from "prop-types";
import redStar from "../../assets/star-red.svg";
import greyStar from "../../assets/star-grey.svg";

export default function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={redStar} alt="red star" />);
    } else {
      stars.push(<img key={i} src={greyStar} alt="grey star" />);
    }
  }

  return <span className="rental-page__rating">{stars}</span>;
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};
