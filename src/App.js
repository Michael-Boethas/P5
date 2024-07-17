import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RentalPage from "./pages/RentalPage/RentalPage";
import Error404 from "./pages/Error404/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="viewport-warning">
        <span className="viewport-warning__icon">⚠️</span>Cette page n&#39;est
        pas optimisée pour les écrans de largeur inférieure à 320px
      </div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:id" element={<RentalPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
