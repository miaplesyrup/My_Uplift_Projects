import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppSessionContext } from "../App";
import { replaceString } from "../plugins/helpers";
import "../assets/css/dashboard.css";

const Dashboard = ({ allTours }) => {
	const userSession = useContext(AppSessionContext);
	const myTours = allTours.filter(item => item.userID === userSession.userID);
	let showMyTours = "";

	if (myTours.length) {
		showMyTours = myTours.map((tour, index) =>
			<div key={index} className="tour-list--item">
				<div className="tour-list--item-grid">
					<div className="panel">
						<div className="panel--header">
							<p className="label-title nogaps">Title</p>
						</div>
						<div className="panel--body">
							<h3 className="nogaps text-capitalized">{tour.tour.tourName}</h3>
						</div>
					</div>
					<div className="panel">
						<div className="panel--header">
							<p className="label-title nogaps">Destination</p>
						</div>
						<div className="panel--body">
							<p className="nogaps">{tour.tour.details.target_place}</p>
						</div>
					</div>
					<div className="panel">
						<div className="panel--header">
							<p className="label-title nogaps">Date</p>
						</div>
						<div className="panel--body">
							<p className="nogaps">{tour.tour.details.calendar} <br /> {tour.tour.details.time}</p>
						</div>
					</div>
					<div className="panel">
						<div className="panel--header">
							<p className="label-title nogaps">Actions</p>
						</div>
						<div className="panel--body">
							<NavLink to={""}>Edit</NavLink> | <NavLink to={""}>Remove</NavLink>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		showMyTours = <h4>No tours to display.</h4>
	}

	const cleanURL = (string) => {
		return replaceString(string, /[^A-Za-z-]/g, "-").substring(0, string.length - 1).toLowerCase();
	}

	document.title = "Dashboard | TRIPnerary";
	return (
		<div id="dashboard">
			<div className="container">
				<div className="dashboard-wrapper">
					<div className="page-header">
						<h2 className="page-title nogaps">Dashboard</h2>
						<NavLink to={`/agency/${cleanURL(userSession.userName)}/add/tour-name`} className="btn-link btn-theme">New Tour</NavLink>
					</div>

					<div className="dashboard--tour-list">
						{showMyTours}
					</div>
				</div>
			</div>
		</div >
	)
}

export default Dashboard;