import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { replaceString } from "../../plugins/helpers";
import { NewTourDataContext } from "../../controllers/DynamicForm";
import FormCounter from "./FormCounter";
import "../../assets/css/newTour.css";

const FormTourName = ({ handleNewTourData }) => {
	const [userSession, newTourData] = useContext(NewTourDataContext);
	const [tourName, setTourName] = useState(newTourData?.tourName || "");

	const handleInput = (e) => {
		setTourName(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!tourName) return;

		handleNewTourData({
			tourName: tourName.trim()
		});
	}

	const cleanURL = (string) => {
		if (string) {
			return replaceString(string, /[^A-Za-z-]/g, "-").toLowerCase();
		}
	}

	return (
		<>
			<div className="page-header">
				<h2 className="page-title nogaps">New Tour</h2>
			</div>
			<div className="newTour--wrapper">
				<FormCounter newTourData={newTourData} />

				<div id="formWrapper">
					<div className="panel">
						<div className="panel--body">
							<form id="newTour" onSubmit={e => handleSubmit(e)}>
								<div className="form-control">
									<p className="label-title theme">Tour Name</p>
									<input type="text" className="input-control" value={tourName} onChange={e => handleInput(e)} />
								</div>
								<div className="flexbox-half">
									<div className="form-control flex-item nogaps">
										{newTourData?.tourName ?
											<button type="submit" className="btn-link">Save</button>
											:
											<button type="submit" className="btn-link btn-theme">Save</button>
										}
									</div>
									<div className="form-control flex-item flex-end nogaps">
										{newTourData?.tourName ? <NavLink to={`/agency/${cleanURL(userSession.userName)}/edit/${newTourData.tourID}/tour-description`} className="btn-link btn-theme">Next</NavLink> : undefined}
									</div>
								</div>
							</form>
						</div>

						<div className="panel--footer panel--gray">
							<p className="label-title">Tip</p>
							<p className="nogaps">The Tour Name could be a one-liner summary of the adventure. Simple but concise is the way to go. It can be "Let's go to the North!", or "A dip in the sea".</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormTourName;