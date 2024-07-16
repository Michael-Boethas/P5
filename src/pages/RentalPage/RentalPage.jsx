import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import rentalsList from "../../data/logements.json";

export default function RentalPage() {
  return (
    <>
      <div className="Info-section">
        {rentalsList.map((rentalInfo) => (
          <Collapse key={rentalInfo.id} data={rentalInfo} />
        ))}
      </div>
    </>
  );
}
