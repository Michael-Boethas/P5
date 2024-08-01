import React from "react";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Message d'avertissement pour les écrans inadaptés */}
      <div className="viewport-warning">
        <span className="viewport-warning__icon">⚠️</span>Cette page n&#39;est
        pas optimisée pour les écrans de largeur inférieure à 320px
      </div>
      <Header /> {/* Header statique */}
      <main className="main">  {/* Contenu à afficher */}
        <Router />
      </main>
      <Footer /> {/* Footer statique */}
    </div>
  );
}

export default App;
