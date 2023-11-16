import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppSessionContext } from "../App";
import LoginForm from "../components/globals/LoginForm";
import Socials from "../components/footer/Socials";

const Footer = ({ handleLogIn }) => {
	const userSession = useContext(AppSessionContext);

	return (
		<footer id="pageFooter">
			<div className="container">
				<div className="footerSignOut--flex">
					<div className="footerSignOut--left flex-item">
						<h3 className="text-white">Links</h3>
						<p><NavLink to={"/"}>Home</NavLink></p>
						<p><NavLink to={"/blog"}>Blog</NavLink></p>
						<p><NavLink to={"/sign-up"}>Sign Up</NavLink></p>
						<p><NavLink to={"/privacy"}>Privacy</NavLink></p>
						<p><NavLink to={"/terms"}>Terms & Use</NavLink></p>
						<p><NavLink to={"/"}>TRIPnerary &copy; 2023</NavLink></p>
					</div>
					<div className="footerSignOut--center flex-item">
						<Socials />
					</div>
					<div className="footerSignOut--right flex-item">
						{userSession?.isActive ?
							<>
								<h3 className="text-white">Blog</h3>
								<p><NavLink to={"/blog/title-here"}>Top 10 Summer Destinations</NavLink></p>
								<p><NavLink to={"/blog/title-here"}>When in Ilocos</NavLink></p>
								<p><NavLink to={"/blog/title-here"}>Quick Weekend Getaway!</NavLink></p>
								<p><NavLink to={"/blog/title-here"}>5 Most Affordable White Beach Resort</NavLink></p>
							</>
							:
							<div className="panel">
								<div className="panel--body">
									<LoginForm handleLogIn={handleLogIn} />
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;