import fb_icon from "../../assets/images/facebook.png";
import ig_icon from "../../assets/images/instagram.png";
import yt_icon from "../../assets/images/youtube.png";

const Socials = () => {
	return (
		<div id="socials">
			<h3 className="text-white">Let's connect!</h3>
			<div className="flex-align-center">
				<img src={fb_icon} width="20" alt="" />
				<a href="https://facebook.com/TRIPnerary">TRIPnerary</a>
			</div>
			<div className="flex-align-center">
				<img src={ig_icon} width="20" alt="" />
				<a href="https://instagram.com/TRIPnerary">TRIPnerary</a>
			</div>
			<div className="flex-align-center">
				<img src={yt_icon} width="20" alt="" />
				<a href="https://youtube.com/TRIPnerary">TRIPnerary</a>
			</div>
			<br />
			<form id="socialsForm">
				<div className="form-control">
					<input type="text" className="input-control" placeholder="Emal Address" />
				</div>
				<div className="form-control">
					<button className="btn-link btn-theme">
						<p className="nogaps">Newsletter</p>
					</button>
				</div>
			</form>
		</div>
	)
}

export default Socials;