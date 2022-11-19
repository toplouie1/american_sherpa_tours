import "./Navbar.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

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
			<div
				className="navbar__hamburger"
				onClick={() => setToggleMenu(!toggleMenu)}
			>
				{!toggleMenu && (
					<MenuIcon
						sx={{
							width: 40,
							height: 40,
						}}
					/>
				)}
				{toggleMenu && (
					<CloseIcon
						sx={{
							width: 40,
							height: 40,
						}}
					/>
				)}
			</div>
			{/* web menu */}
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
					<Link to="/promotions">
						<li>Promotions</li>
					</Link>
					<Link to="/contact">
						<li>Contact Us</li>
					</Link>
				</ul>
			</div>
			{/* mobile menu  */}

			<div
				className="navbar__mobileMenu"
				style={{ right: toggleMenu ? "0px" : "-181px" }}
			>
				<ul>
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
					<Link to="/promotions">
						<li>Promotions</li>
					</Link>
					<Link to="/contact">
						<li>Contact Us</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
