import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Events from "./components/upcoming_Events/Events";
import Past_Events from "./components/past_Events/Past_Events";
import Family from "./components/family/Family";
import Investment from "./components/investment/Investment";
import Promotions from "./components/promotions/Promotions";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/upcoming/events" element={<Events />} />
					<Route path="/past/events" element={<Past_Events />} />
					<Route path="/family" element={<Family />} />
					<Route path="/investment" element={<Investment />} />
					<Route path="/promotions" element={<Promotions />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
