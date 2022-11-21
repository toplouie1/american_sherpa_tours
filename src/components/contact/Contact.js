import "./Contact.scss";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__header">
				<h1>Let's Connect</h1>
			</div>
			<img
				alt="bouddha pic"
				src="https://uploads-ssl.webflow.com/62ab5d7e9656d67b3955415b/62b74766e640093f2034f3a5_boudha.jpg"
				className="contact__img"
			/>
			<div className="contact__container">
				<div className="contact__leftside">
					<h2 className="contact__smallHeader">Connect with us</h2>
					<p className="contact__description">
						If you have any question, please send us a message so we can help
						you with that problem as soon as possible. Thank you!
					</p>
					<ul>
						<li>
							<a target="blank" href="https://twitter.com/sherpa_tours">
								Follow us on Twitter <FacebookIcon />
							</a>
						</li>
						<li>
							<a target="blank" href="https://www.facebook.com/SherpaTours/">
								Follow us on Facebook <TwitterIcon />
							</a>
						</li>
						<li>
							<a
								target="blank"
								href="https://www.instagram.com/americansherpatours3/"
							>
								Follow us on Instagram <InstagramIcon />
							</a>
						</li>
						<li>
							<a href="mailto:toplouie78@gmail.com">Contact us </a>
						</li>
					</ul>
				</div>
				<div className="contact__rightside">
					<form>
						<TextField
							className="contact__field"
							id="standard-basic"
							label="Name"
							variant="standard"
						/>
						<TextField
							className="contact__field"
							id="standard-basic"
							label="Email"
							variant="standard"
						/>
						<TextField
							className="contact__field"
							id="standard-basic"
							label="Message"
							variant="standard"
						/>
						<button className="contact__button">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
