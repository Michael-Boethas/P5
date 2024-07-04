import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RentalSheet from "./pages/RentalSheet/RentalSheet";
import Error404 from "./pages/Error404/Error404"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				{/* <Routes> */}
					{/* <Route path="/" element={<Home />} /> */}
					{/* <Route path="/about" element={<About />} /> */}
					{/* <Route path="/rental/:id" element={< RentalSheet />} /> */}
					{/* <Route path="*" element={<Error404 />} />          Wildcard pour toutes les routes invalides */}
				{/* </Routes> */}
			</main>
			<Footer />
		</div>
	);
}

export default App;