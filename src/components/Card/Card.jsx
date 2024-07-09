import { Link } from "react-router-dom";
import "../../styles/components/_Card.scss";

export default function Card({ data }) {
  return (
    <Link to={`/rental/${data.id}`} className="card__link-rental">
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
