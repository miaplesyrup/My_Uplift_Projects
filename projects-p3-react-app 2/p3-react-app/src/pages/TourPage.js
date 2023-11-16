import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "../assets/css/tourPage.css";

const TourPage = ({ allTours }) => {
	const { userName, tourID } = useParams();
	const splitUserName = userName.split("-");
	const tourOwnerName = splitUserName.reduce((a, b) => a + " " + b);
	const tourData = allTours.filter((item, index) => item.userName.toLowerCase() === tourOwnerName && item.tour.tourID === tourID)[0];
	const assembleDetails = Object.keys(tourData.tour.details).map((key, index) => ({ [key]: tourData.tour.details[key] }));

	return (
		<div id="tourPage">
			<div className="container">
				<div className="tourPage-wrapper">
					<div className="tourPage-grid">
						<div className="panel grid-item">
							<div className="panel--header">
								<h1 className="text-capitalized nogaps">{tourData.tour.tourName}</h1>
							</div>

							<div className="panel--body">
								<img src={require(`../assets/images/${tourData.tour.images[0]}`)} className="tourPage-image" alt="" />
								<div className="flexbox-half">
									<div className="flex-item">
										<p>{tourData.tour.description}</p>
									</div>
									<div className="flex-item">
										<div className="tourPage-details">
											{assembleDetails.map((item, index) =>
												<div key={index} className="list-parent">
													<div className="list-item">
														<img src={require(`../assets/images/${Object.keys(item).toString()}.png`)} width="25" alt="" />
													</div>
													<div className="list-item">
														{Object.keys(item).toString() === "joiner_count" ?
															<p style={{ textTransform: "none" }}>Open to {item[Object.keys(item).toString()]} joiner(s)</p> : undefined}

														{Object.keys(item).toString() === "budget" ?
															<p style={{ textTransform: "none" }}>Php {item[Object.keys(item).toString()]} per joiner</p> : undefined}

														{Object.keys(item).toString() !== "joiner_count" &&
															Object.keys(item).toString() !== "budget" ? <p>{item[Object.keys(item).toString()]}</p> : undefined}
													</div>
												</div>
											)}
										</div>
									</div>
								</div>

							</div>

							<div className="panel--footer">
								<div className="flexbox-half">
									<div className="flex-item">
										<NavLink to={""} className="btn-link btn-theme">Join</NavLink>
									</div>
									<div className="flex-item">
										<ul className="ul-list joiner-list">
											<li><img src={require("../assets/images/avatar-2.png")} alt="" /></li>
											<li><img src={require("../assets/images/avatar-3.png")} alt="" /></li>
											<li><img src={require("../assets/images/avatar-4.png")} alt="" /></li>
											<li><img src={require("../assets/images/avatar-5.png")} alt="" /></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="timelineList grid-item">
							{tourData.tour.timeline.map((item, index) => <div key={index} className="panel timelineList--item">
								<img src={require("../assets/images/circle.png")} className="timeline-dot" alt="" />
								<div className="timelineList--inner">
									<div className="panel--header">
										<div className="flexbox-half">
											<h2 className="timeline--title flex-item">{item.title}</h2>
										</div>
										<div className="timeline--date-time">
											<span className="timeline--date">{tourData.tour.details.calendar}</span> @ <span className="timeline--time">{item.time}</span>
										</div>
										<p>{item.description}</p>
									</div>
								</div>
							</div>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TourPage;