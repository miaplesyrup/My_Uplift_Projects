import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewTourDataContext } from "../../controllers/DynamicForm";
import FormCounter from "./FormCounter";
import { replaceString } from "../../plugins/helpers";


const FormTourDesc = ({ handleNewTourData }) => {
	const [userSession, newTourData] = useContext(NewTourDataContext);
	const [details, setDetails] = useState({
		calendar: newTourData.details?.calendar || "",
		time: newTourData.details?.time || "",
		target_place: newTourData.details?.target_place || "",
		joiner_count: newTourData.details?.joiner_count || "",
		budget: newTourData.details?.budget || ""
	});

	const handleInput = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!details.calendar || !details.time || !details.joiner_count || !details.budget) return;

		handleNewTourData({
			details: details
		});
	}

	const cleanURL = (string) => {
		if (string) {
			return replaceString(string, /[^A-Za-z-]/g, "-").toLowerCase();
		}
	}

	document.title = `Details | TRIPnerary`;
	return (
		<>
			<div className="page-header">
				<h2 className="page-title nogaps"> Details</h2>
			</div>
			<div className="newTour--wrapper">
				<FormCounter newTourData={newTourData} />

				<div id="formWrapper">
					<div className="panel">
						<div className="panel--body">
							<form id="newTour" onSubmit={e => handleSubmit(e)}>
								<p className="label-title theme">Date</p>
								<div className="grid-icon-input">
									<img src={require(`../../assets/images/calendar.png`)} alt="" width="30" />
									<div className="form-control">
										<input type="date" className="input-control" name="calendar" value={details.calendar} onChange={e => handleInput(e)} />
									</div>
								</div>
								<p className="label-title theme">Time</p>
								<div className="grid-icon-input">
									<img src={require(`../../assets/images/clock.png`)} alt="" width="30" />
									<div className="form-control">
										<input type="time" className="input-control" name="time" value={details.time} onChange={e => handleInput(e)} />
									</div>
								</div>
								<p className="label-title theme">Destination</p>
								<div className="grid-icon-input">
									<img src={require(`../../assets/images/map.png`)} alt="" width="30" />
									<div className="form-control">
										<input type="text" className="input-control" name="target_place" value={details.target_place} onChange={e => handleInput(e)} />
									</div>
								</div>
								<p className="label-title theme">Joiner Count</p>
								<div className="grid-icon-input">
									<img src={require(`../../assets/images/bag.png`)} alt="" width="30" />
									<div className="form-control">
										<input type="number" className="input-control" name="joiner_count" value={details.joiner_count} onChange={e => handleInput(e)} />
									</div>
								</div>
								<p className="label-title theme">Budget (Php)</p>
								<div className="grid-icon-input">
									<img src={require(`../../assets/images/money.png`)} alt="" width="30" />
									<div className="form-control">
										<input type="number" className="input-control" name="budget" value={details.budget} onChange={e => handleInput(e)} />
									</div>
								</div>
								<div className="flexbox-half">
									<div className="form-control flex-item nogaps">
										{newTourData.details?.budget ?
											<button type="submit" className="btn-link">Save</button>
											:
											<button type="submit" className="btn-link btn-theme">Save</button>
										}
									</div>
									<div className="form-control flex-item flex-end nogaps">
										{newTourData.details?.budget ? <NavLink to={`/agency/${cleanURL(userSession.userName)}/edit/${newTourData.tourID}/timeline`} className="btn-link btn-theme">Next</NavLink> : undefined}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormTourDesc;