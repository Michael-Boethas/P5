import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import RentalPage from "../../pages/RentalPage/RentalPage";
import Error404 from "../../pages/Error404/Error404";

export default function Router() {
  return (
    <>
      {/* Routeur qui gère l'affichage des différents contenus de
         l'application entre le header et le footer statiques*/}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route racine */}
        <Route path="/about" element={<About />} />
        <Route path="/rental/:rentalId" element={<RentalPage />} /> {/* Route paramétrée avec l'identifiant du logement */}
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} /> {/* Redirection vers la page d'erreur 404 (sans conserver l'url non valide en mémoire)*/}
      </Routes>
    </>
  );
}
