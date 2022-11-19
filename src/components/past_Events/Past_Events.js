import "./Past_Events.scss";

const Past_Events = () => {
	return (
		<div className="pastEvents">
			<h1 className="pastEvents__header">Our past Events</h1>
			<h2 className="pastEvents__secondheader">Wine Tasting Events</h2>
			<div className="pastEvents__video">
				<iframe
					width="900"
					height="400"
					src="https://www.youtube.com/embed/r19CBKywWO4"
					title="Wine Testing 2022 American Sherpa Tours"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h2 className="pastEvents__secondheader">
				Photos from Wine Tasting Event
			</h2>
			<div className="pastEvents__column">
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6331091dff3a74168a3863ae_image_50746113-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6331097742bc6ab9783d4cf7_image_50460161-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633109ff42bc6af8113d4fe0_image_50439937-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/63310b519942db0d3170a2a5_image_50436353-p-1080.jpg"
				/>
			</div>

			<h2 className="pastEvents__secondheader">Fall Hiking 2022</h2>

			<div className="pastEvents__video">
				<iframe
					className="pastEvents__video"
					width="800"
					height="400"
					src="https://www.youtube.com/embed/n6aECe02V0g"
					title="Fall Hiking Upstate New York 2022"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>

			<h2 className="pastEvents__secondheader">Photos from Fall Hiking</h2>

			<div className="pastEvents__column">
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6361c2245c5851270b477e0e_edited-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6361c2ad747a19e46caa6e2b_image_50460417-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6361ca02fa5b873bc9d5d95e_edit3-p-1080.jpg"
				/>
				<img
					className="pastEvents__imgItem"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/6361c47fcfadce1a03173602_edited2-p-1080.jpg"
				/>
			</div>
		</div>
	);
};

export default Past_Events;
