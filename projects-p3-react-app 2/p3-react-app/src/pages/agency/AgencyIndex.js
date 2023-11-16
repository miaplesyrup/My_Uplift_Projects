import "../../assets/css/agency.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const UserPage = ({ userData }) => {

	document.title = `${userData.userName} | TRIPnerary`;
	return (
		<div id="userPage">
			<div className="userPage--header" style={{ backgroundImage: `url(${require(`../../assets/images/coverPhoto.png`)})` }}>
				<div className="userPage--profile">
					<div className="userPage-absolute">
						<div className="userPage--avatar" style={{ backgroundImage: `url(${require(`../../assets/images/avatar.png`)})` }}></div>
						<div className="userPage--basic-info">
							<div className="userPage--basic-info-right">
								<h1 className="userPage--userName">{userData.userName}</h1>
								<div className="list-parent">
									<div className="list-item">
										<div><FontAwesomeIcon icon={faEnvelope} className="color-theme" /> poitravelandtours@gmail.com</div>
									</div>
									<div className="list-item">
										<div><FontAwesomeIcon icon={faPhone} className="color-theme" /> 0999 992 1745</div>
									</div>
									<div className="list-item">
										<div><FontAwesomeIcon icon={faMapMarkerAlt} className="color-theme" /> Antipolo, City</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="userPage--body">
				<div className="userPage--body-grid">
					<div className="userPage--body-left">
					</div>

					<div className="userPage--body-right">
						<div className="panel userPage-navbar">
							<div>
								<NavLink to={""} className={({ isActive }) => isActive ? "userPage-navbar--link page-active" : "userPage-navbar--link"}>My Page</NavLink>
								<NavLink to={"about"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>About</NavLink>
								<NavLink to={"photos"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>Photos</NavLink>
							</div>
							<div>
								<NavLink to={"settings"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>Settings</NavLink>
							</div>
						</div>


					</div>
				</div>
			</div>

			<div className="userPage--footer">

			</div>
		</div>
	)
}

export default UserPage;