import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppSessionContext } from "../../App";
import NavbarUser from "../navbar/NavbarUser";
import "../../assets/css/navbar.css";

const Navbar = ({ handleLogOut }) => {
	const userSession = useContext(AppSessionContext);
	const navigation = useNavigate();
	const URLparams = useParams();
	const URLsegments = window.location.href.split("/");
	let showNavbar = "";

	if (userSession.isActive && URLsegments[3] === "sign-up") {
		navigation("/");
	}

	if (!URLparams.length) {
		switch (URLsegments[3]) {
			case "sign-up":
				showNavbar = <NavLink to={"/"} className="btn-link btn-theme">Home</NavLink>;
				break;
			default:
				showNavbar = <NavLink to={"/sign-up"} className="btn-link btn-theme">Sign Up</NavLink>
				break;
		}
	}

	if (userSession.isActive) {
		showNavbar = <NavbarUser handleLogOut={handleLogOut} />
	}

	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar--wrapper navbar--grid">
					<div className="navbar--left">
						<NavLink to={"/"} className="logo-link">
							<img src={logo} alt="TRIPnerary" className="logo-img" /> <span className="hidden-mobile">TRIPnerary</span>
						</NavLink>
					</div>
					<div className="navbar--right">
						{showNavbar}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;