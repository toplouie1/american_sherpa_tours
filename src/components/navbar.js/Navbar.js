import "./Navbar.scss";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/62b9d5859189305ab246032a_Logo%205-p-500.png"
					alt="sherpa Tour Logo"
				/>
			</div>
			<div className="navbar__rightItems">
				<ul className="navbar__rightItemsList">
					<li>Home</li>
					<li>About</li>
					<li>Upcoming Events!</li>
					<li>Past Events!</li>
					<li>Family</li>
					<li>Investors</li>
					<li>Promotions</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
