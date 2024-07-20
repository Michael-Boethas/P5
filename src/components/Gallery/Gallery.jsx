import React from "react";
import Card from "../Card/Card";
import rentalsList from "../../data/logements.json";

export default function Gallery() {
  return (
    <section className="gallery">
      {rentalsList.map((rental) => (
        <Card key={rental.id} data={rental} />
      ))}
    </section>
  );
}
