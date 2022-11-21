import "./Family.scss";
import { Button } from "@mui/material";

const Family = () => {
	return (
		<div className="family'">
			<h1 className="family__header">American Sherpa - Families</h1>
			<img
				className="family__pic"
				// src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6361c2245c5851270b477e0e_edited-p-1080.jpg"
				src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/63310b519942db0d3170a2a5_image_50436353.JPG"
			/>
			<p className="family__description">
				Would you like to join our Sherpa Family and join us in our adventure?
				You will be able to make recommendations to visit different destinations
				as well as recommendations on different activities that you would like
				us to do. If you want to be a member of our Sherpa Family then fill the
				form below, and you will get signed up to be one of the members of our
				Sherpa Family. "American Sherpa building communities with travel and
				tours"
			</p>
			<div className="family__button">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSfwV9A644NxaiN7e1fDnRlrrL7UbQqTNPquiOOL0im7e2kBrQ/viewform"
					target="blank"
					variant="contained"
				>
					American Sherpa Families
				</Button>
			</div>
			<h2 className="family__secondary">Sign-Up for Upcoming Events!</h2>
			<p className="family__description">
				Want to receive notification about our upcoming events? Sign-up here, so
				that we can email you as early as possible about our new upcoming future
				events!
			</p>
			<div className="family__button">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSezVJXHyYidZEhWbncN5DexfkzwIkoTo4xJiPESQGHrKPfFUA/viewform"
					target="blank"
					variant="contained"
				>
					Sign-Up for Notification!
				</Button>
			</div>
			<h2 className="family__secondary">Volunteer Oppurtunity</h2>
			<p className="family__description">
				Also, if you want to be a selected as a volunteer in our next upcoming
				event then, fill up this form below!
			</p>
			<div className="family__button">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSfphNMXrVFemvrh7zS8qLTFINeHJzJExZuLdePsP8u7xqzpfg/viewform"
					target="blank"
					variant="contained"
				>
					Become a Volunter
				</Button>
			</div>
		</div>
	);
};
export default Family;
