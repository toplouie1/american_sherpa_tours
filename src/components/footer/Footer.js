import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<ul>
					<li>
						<a target="blank" href="https://twitter.com/sherpa_tours">
							Twitter <FacebookIcon />
						</a>
					</li>
					<li>
						<a target="blank" href="https://www.facebook.com/SherpaTours/">
							Facebook <TwitterIcon />
						</a>
					</li>
					<li>
						<a
							target="blank"
							href="https://www.instagram.com/americansherpatours3/"
						>
							Instagram <InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
			<div className="footer__middle">
				<ul>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/family">Familys</Link>
					</li>
					<li>
						<Link to="/upcoming/events">Upcoming Events!</Link>
					</li>
				</ul>
			</div>
			<div className="footer__right">
				<ul>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/investment">Become a Investor</Link>
					</li>
					<li>
						<Link to="promotions">Promotions</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Footer;
