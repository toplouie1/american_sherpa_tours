import "./Home.scss";
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
			<div className="home__ytVideo">
				<iframe
					width="900"
					height="600"
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
