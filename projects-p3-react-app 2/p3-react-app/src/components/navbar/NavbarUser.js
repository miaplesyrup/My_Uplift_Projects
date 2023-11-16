import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppSessionContext } from "../../App";
import { replaceString } from "../../plugins/helpers";

const NavbarUser = ({ handleLogOut }) => {
	const [isVisible, setIsVisible] = useState(false);
	const userSession = useContext(AppSessionContext);

	const styles = {
		yes: { display: "block" },
		no: { display: "none" },
	}

	const activeStyle = {
		backgroundColor: "#eee",
	}

	window.addEventListener("click", (e) => {
		const elem = e.target;

		if (elem.getAttribute("class") === "dropdown-body" || elem.getAttribute("class") === "dropdown-link" || elem.getAttribute("class") === "navbarUser--avatar") {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	})

	const cleanURL = (string) => {
		return replaceString(string, /[^A-Za-z-]/g, "-").substring(0, string.length - 1).toLowerCase();
	}

	return (
		<div id="navbarUser">
			<NavLink to={"/"} className={({ isActive }) => isActive ? "btn-link btn-theme" : "btn-link"}>Home</NavLink>
			<div className="navbarUser--wrapper">
				<img src={require("../../assets/images/avatar.png")} alt="" className="navbarUser--avatar" onClick={() => setIsVisible(!isVisible)} />
			</div>

			<div className="dropdown" style={isVisible ? styles.yes : styles.no}>
				<div className="dropdown--body">
					<NavLink
						to={`/agency/${cleanURL(userSession.userName)}/dashboard`}
						className="dropdown-link"
						style={({ isActive }) => isActive ? activeStyle : undefined}
					>
						Dashboard
					</NavLink>

					<NavLink
						to={`/agency/${cleanURL(userSession.userName)}/profile`}
						className="dropdown-link"
						style={({ isActive }) => isActive ? activeStyle : undefined}
					>
						Profile
					</NavLink>
					<hr />

					<p className="dropdown-link no-gaps" onClick={handleLogOut}>
						Log Out
					</p>
				</div>
			</div>
		</div>
	)
}

export default NavbarUser;