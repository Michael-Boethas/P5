import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RentalPage from "./pages/RentalPage/RentalPage";
import Error404 from "./pages/Error404/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

      {/* Message d'avertissement pour les écrans inadaptés */}
      <div className="viewport-warning">
        <span className="viewport-warning__icon">⚠️</span>Cette page n&#39;est
        pas optimisée pour les écrans de largeur inférieure à 320px
      </div>

      <Header />

      <main className="main">
        {/* Routeur qui gère l'affichage des différents contenus de
         l'application entre le header et le footer statiques*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:rentalId" element={<RentalPage />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
