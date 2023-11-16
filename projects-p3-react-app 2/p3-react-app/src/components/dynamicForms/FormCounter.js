import { useContext } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { replaceString } from "../../plugins/helpers";
import "../../assets/css/newTour.css";
import { NewTourDataContext } from "../../controllers/DynamicForm";

const FormCouter = () => {
	const { formName } = useParams();
	const [userSession, newTourData] = useContext(NewTourDataContext);

	const cleanURL = (string) => {
		if (string) {
			return replaceString(string, /[^A-Za-z-]/g, "-").toLowerCase();
		}
	}

	const tourNameEditURL = formName === "tour-name" ? undefined : `/agency/${cleanURL(userSession.userName)}/edit/${newTourData.tourID}/tour-name`;
	const tourDescriptionEditURL = "";
	const tourDetailsEditURL = "";

	return (
		<div id="formCounter">
			{newTourData?.tourName ?
				<NavLink to={tourNameEditURL} className="formCounter--link active">
					<img src={require("../../assets/images/check_white.png")} width="25" alt="" />
				</NavLink>
				:
				<div className={formName === "tour-name" ? "formCounter--link current" : "formCounter--link"}>1</div>
			}
			{newTourData?.description ?
				<NavLink to={tourDescriptionEditURL} className="formCounter--link">
					<img src={require("../../assets/images/check_white.png")} width="25" alt="" />
				</NavLink>
				:
				<div className={formName === "tour-description" ? "formCounter--link current" : "formCounter--link"}>2</div>
			}
			{newTourData?.details ?
				<NavLink to={tourDetailsEditURL} className="formCounter--link">
					<img src={require("../../assets/images/check_white.png")} width="25" alt="" />
				</NavLink>
				:
				<div className={formName === "tour-details" ? "formCounter--link current" : "formCounter--link"}>3</div>
			}
		</div>
	)
}

export default FormCouter;