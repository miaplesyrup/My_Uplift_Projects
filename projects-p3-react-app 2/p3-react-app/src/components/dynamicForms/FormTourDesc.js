import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewTourDataContext } from "../../controllers/DynamicForm";
import { replaceString } from "../../plugins/helpers";
import FormCounter from "./FormCounter";

const FormTourDesc = ({ handleNewTourData }) => {
	const [userSession, newTourData] = useContext(NewTourDataContext);
	const [description, setDescription] = useState(newTourData?.description || "");

	const handleInput = (e) => {
		setDescription(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!description) return;

		handleNewTourData({
			description: description.trim()
		});
	}

	const cleanURL = (string) => {
		return replaceString(string, /[^A-Za-z-]/g, "-").toLowerCase();
	}

	document.title = `Description | TRIPnerary`;
	return (
		<>
			<div className="page-header">
				<h2 className="page-title nogaps"> Description</h2>
			</div>
			<div className="newTour--wrapper">
				<FormCounter newTourData={newTourData} />

				<div id="formWrapper">
					<div className="panel">
						<div className="panel--body">
							<form id="newTour" onSubmit={e => handleSubmit(e)}>
								<div className="form-control">
									<p className="label-title theme">Description</p>
									<textarea type="text" className="input-control" rows="4" value={description} onChange={e => handleInput(e)}></textarea>
								</div>
								<div className="flexbox-half">
									<div className="form-control flex-item nogaps">
										{newTourData?.description ?
											<button type="submit" className="btn-link">Save</button>
											:
											<button type="submit" className="btn-link btn-theme">Save</button>
										}
									</div>
									<div className="form-control flex-item flex-end nogaps">
										{newTourData?.description ? <NavLink to={`/agency/${cleanURL(userSession.userName)}/edit/${newTourData.tourID}/tour-details`} className="btn-link btn-theme">Next</NavLink> : undefined}
									</div>
								</div>
							</form>
						</div>

						<div className="panel--footer panel--gray">
							<p className="label-title">Tip</p>
							<p className="nogaps">This answers the question; <i>How would you best describe the tour?</i> IT would be best to include the beautiful spots, or historical places that the joiners would love to go to.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormTourDesc;