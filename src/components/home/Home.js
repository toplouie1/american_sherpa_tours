import "./Home.scss";
import { Button } from "@mui/material";

const Home = () => {
	return (
		<div className="home">
			<div className="home__headerSection">
				<h1 className="home__header">American Sherpa Tours </h1>
				<h2 className="home__secondHeader">
					American Sherpa building communities with travel and tours
				</h2>
			</div>

			<div className="home__homePoster">
				<img
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/63098932a4572181b3da27f9_Nepal-p-1080.jpg"
					alt="home poster sherpa img"
				/>
			</div>
			<div className="home__button">
				<h2 className="home__secondHeader">Join the tour 2023!</h2>
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLScEFXSp2nx2rZgv6tWaqZAl31uqvBc2CO4JuoREaTEqu_BoXQ/viewform"
					target="blank"
					variant="contained"
				>
					Form
				</Button>
			</div>
			<div className="home__ytVideo">
				<iframe
					className="home__video"
					width="800"
					height="400"
					margin="30"
					src="https://www.youtube.com/embed/ATuadlGdKFE"
					title="American Sherpa Tours( What Do We Do?)"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
};
export default Home;
