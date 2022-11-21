import "./Investment.scss";
import { Button } from "@mui/material";

const Investment = () => {
	return (
		<div className="investment">
			<img
				className="investment__img"
				alt="family pic"
				src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6331091dff3a74168a3863ae_image_50746113.JPG"
			/>
			<h1 className="investment__header">Investment Interest</h1>
			<p className="investment__description">
				We do activities involving Sherpa communities and also tours around the
				country to build stronger community here in America for Sherpa people.
				We do activities involving Sherpa communities and also tours around the
				country to build stronger community here in America for Sherpa people.
				Come and join us and let's create a strong American Sherpa community
				together. You can help us in building this community by being an
				Investor to this platform for our future aims that is to create stronger
				and better Sherpa Community.
			</p>
			<div className="investment__button">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSf-cag0ME8DEufeicefrWVrvqVs1l4S8B683cgBKbsw2IYtzA/viewform"
					target="blank"
					variant="contained"
				>
					Investment Interest
				</Button>
			</div>
		</div>
	);
};
export default Investment;
