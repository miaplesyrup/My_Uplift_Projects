import { NavLink } from "react-router-dom";
import { replaceString } from "../../plugins/helpers";
import "../../assets/css/itinerarycard.css";

const ItineraryCard = ({ tour }) => {
	const cleanURL = (string) => {
		return replaceString(string, /[^A-Za-z-]/g, "-").toLowerCase().trim();
	}

	return (
		<>
			<div className="itineraryCard" >
				<div className="itineraryCard--head" style={{ backgroundImage: `url(${require(`../../assets/images/${tour.tour.images[0]}`)})` }}></div>
				<div className="itineraryCard--body">
					<h3 className="itineraryCard--tour_name nogaps">
						<NavLink className="text-link text-capitalized" to={`agency/${cleanURL(tour.userName)}/${tour.tour.tourID}/${cleanURL(tour.tour.tourName)}`}>
							{tour.tour.tourName}
						</NavLink>
					</h3>
				</div>
				<div className="itineraryCard--footer">
					<div className="flexbox-half">
						<div className="flex-item">
							<div className="flexbox-inline-center">
								<img src={require("../../assets/images/calendar.png")} width="20" alt="" />
								<span>{tour.tour.details.calendar}</span>
							</div>
							<div className="flexbox-inline-center">
								<img src={require("../../assets/images/joiner.png")} width="20" alt="" />
								<span>{tour.tour.details.joiner_count} <small>(joiners)</small></span>
							</div>
						</div>
						<div className="flex-item">
							<div className="flexbox-inline-center">
								<img src={require("../../assets/images/time.png")} width="20" alt="" />
								<span>{tour.tour.details.time} <small>(on wards)</small></span>
							</div>
							<div className="flexbox-inline-center">
								<img src={require("../../assets/images/budget.png")} width="20" alt="" />
								<span>{tour.tour.details.budget} <small>(per joiner)</small></span>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default ItineraryCard;