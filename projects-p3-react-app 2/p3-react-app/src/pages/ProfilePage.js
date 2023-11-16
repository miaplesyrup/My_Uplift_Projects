import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import usersEndpoint from "../assets/data/usersEndpoint";
import ItineraryCard from '../components/globals/ItineraryCard';

const ProfilePage = ({ allTours }) => {
	const { userName, tourID } = useParams();
	const splitUserName = userName.split("-");
	const tourOwnerName = splitUserName.reduce((a, b) => a + " " + b);
	const tourData = allTours.filter(item => item.userName.toLowerCase() === tourOwnerName);
	const userData = usersEndpoint.filter(item => item.userName.toLowerCase() === tourOwnerName.toLowerCase())[0];
	const showItineraryCard = tourData.map((tour, index) => <ItineraryCard key={index} tour={tour} />);

	console.log(tourID);

	return (
		<div id="profilePage">
			<div id="userPage">
				<div className="userPage--header" style={{ backgroundImage: `url(${require(`../assets/images/coverPhoto.png`)})` }}>
					<div className="userPage--profile">
						<div className="userPage-absolute">
							<div className="userPage--avatar" style={{ backgroundImage: `url(${require(`../assets/images/avatar.png`)})` }}></div>
							<div className="userPage--basic-info">
								<div className="userPage--basic-info-right">
									<h1 className="userPage--userName text-capitalized">{userData.userName}</h1>
									<div className="list-parent">
										<div className="list-item">
											<div><FontAwesomeIcon icon={faEnvelope} className="color-theme" /> {userData.userEmail}</div>
										</div>
										<div className="list-item">
											<div><FontAwesomeIcon icon={faPhone} className="color-theme" /> {userData.phone}</div>
										</div>
										<div className="list-item">
											<div><FontAwesomeIcon icon={faMapMarkerAlt} className="color-theme" /> {userData.office}</div>
										</div>
									</div>
								</div>
								<div className="userPage--basic-info-left"></div>
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
									<NavLink to={""} className={({ isActive }) => isActive ? "userPage-navbar--link page-active" : "userPage-navbar--link"}>Agency</NavLink>
									<NavLink to={"about"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>About</NavLink>
									<NavLink to={"photos"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>Photos</NavLink>
								</div>
								<div>
									<NavLink to={"settings"} className={({ isActive }) => isActive ? "userPage-navbar--link active" : "userPage-navbar--link"}>Settings</NavLink>
								</div>
							</div>

							<Outlet />

						</div>
					</div>
				</div>

				<div className="userPage--footer">
					<section id="itineraryList">
						{tourID ? showItineraryCard : undefined}
					</section>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage;