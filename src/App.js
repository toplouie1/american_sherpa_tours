import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
