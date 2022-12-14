import "./Events.scss";

import { Button } from "@mui/material";

const Upcoming = () => {
	return (
		<div className="events">
			<h1 className="events__header">Ski-Trip</h1>
			<p className="events__description">
				* We have a Ski-Trip coming up, if excited click the button below to
				join us!
			</p>
			<div className="events__img">
				<img
					alt="event pic"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/630f6e376d8bf37fd089068e_Blue%20Yellow%20Modern%20Top%20Winter%20Vacation%20Destinations%20Your%20Story-p-500.jpg"
				/>
			</div>
			<div className="events__button">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSd82F0NBiFreAD9YtLPUiYCxNPgJkAym4XehPrWmZF7sel_mQ/viewform"
					target="blank"
					variant="contained"
				>
					Sign-Up for Ski-trip
				</Button>
			</div>
			<p
				href="https://docs.google.com/forms/d/e/1FAIpQLSd82F0NBiFreAD9YtLPUiYCxNPgJkAym4XehPrWmZF7sel_mQ/viewform"
				target="blank"
				className="events__description"
			>
				If you want to know more about this Ski-trip event then you can leave a
				message on the "Contact Us" page of our website. You can also call or
				email us on the contacts given on the pamphlets we have here on our
				website
			</p>
		</div>
	);
};
export default Upcoming;
