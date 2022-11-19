import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Events from "./components/upcoming_Events/Events";
import Past_Events from "./components/past_Events/Past_Events";

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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
