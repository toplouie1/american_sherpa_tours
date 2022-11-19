import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<Link to="/">
					<img
						src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/62b9d5859189305ab246032a_Logo%205-p-500.png"
						alt="sherpa Tour Logo"
					/>
				</Link>
			</div>
			<div className="navbar__rightItems">
				<ul className="navbar__rightItemsList">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/upcoming/events">
						<li>Upcoming Events!</li>
					</Link>
					<Link to="/past/events">
						<li>Past Events!</li>
					</Link>
					<Link to="/family">
						<li>Family</li>
					</Link>
					<Link to="/investment">
						<li>Investors</li>
					</Link>
					<Link to="/">
						<li>Promotions</li>
					</Link>
					<Link to="/">
						<li>Contact Us</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
