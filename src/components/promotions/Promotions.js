import "./Promotions.scss";
const Promotions = () => {
	return (
		<div className="promotions">
			<h1 className="promotions__header">Sherpa Businesses that We Promote</h1>
			<div className="promotions__bigImg">
				<img
					className="promotions__bigImg"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b2ed82bb8e12129ae6059_Sonam%20Lama-p-800.jpg"
				/>
			</div>
			<div className="promotions__bigImg">
				<img src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b2df5225baf2fead7b2e7_Everest-Ad.jpeg" />
			</div>

			<div className="promotions__businessInformation">
				<h2 className="promotions__largeHeader">propery for Rent</h2>
				<h3 className="promotions__mediumHeader">
					Contact-Lakpa Sherpa (917-371-3225)
				</h3>
				<h4 className="promotions__smallHeader">
					Welcome to Hudson View Villa!
				</h4>
				<p className="promotions__businessDescription">
					Relax with the whole family or friends at a hill top property
					overlooking The Hudson and Berkshires. Hudson View House offers over
					2900 sq ft of gorgeous luxury space with views of the Hudson and
					Berkshires from every room. The scenic views of the surroundings and
					breathtaking sunrises and sunsets will want you to never go home!
				</p>
			</div>

			<div className="promotions__imgRow">
				<img
					className="promotions__smallImg"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b5da4c68a5b46714b8ff8_0895944e-f15a-49da-b451-256ba503c1c9.jpeg"
				/>
				<img
					className="promotions__smallImg"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b5d9fed3a576fd7978b97_469a9991-5121-4546-9e4d-67927827b0ac.jpeg"
				/>
				<img
					className="promotions__smallImg"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b5f44235b080af60f421c_f7876684-c1a4-474e-9dcd-8707771b9459.jpeg"
				/>
				<img
					className="promotions__smallImg"
					src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/633b5d9a65dbb89972510538_a9ad1326-9879-4145-b17f-5e83074af1d9.jpeg"
				/>
			</div>

			<p className="promotions__descriptions">
				Promote your business with American Sherpa Tours. Fill out the form
				below to reach out to us about business promotion.
			</p>
			<div className="promotions__button">
				<button>Promote Business</button>
			</div>
		</div>
	);
};
export default Promotions;
