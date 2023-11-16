import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewTourDataContext } from "../../controllers/DynamicForm";

const FormTourTimeline = ({ handleNewTourData, publishTour }) => {
	const [userSession, newTourData] = useContext(NewTourDataContext);
	const [timeline, setTimeline] = useState({
		timeline_id: 1,
		title: newTourData.timeline?.title || "",
		time: newTourData.timeline?.time || "",
		description: newTourData.timeline?.description || "",
	});
	let showDetailsUI = "";
	let showTimelineUI = "";

	const handleInput = (e) => {
		setTimeline({ ...timeline, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!timeline.title || !timeline.time || !timeline.description) return;

		const timelineCount = newTourData?.timeline ? newTourData.timeline.length + 1 : 1;

		handleNewTourData({ ...timeline, timeline_id: timelineCount });
		setTimeline({ timeline_id: "", title: "", time: "", description: "" })
	}

	if (newTourData.tourName) {
		const assembleDetails = Object.keys(newTourData.details).map((key, index) => ({ [key]: newTourData.details[key] }))

		showDetailsUI = assembleDetails.map((item, index) =>
			<div key={index} className="list-parent">
				<div className="list-item">
					<img src={require(`../../assets/images/${Object.keys(item).toString()}.png`)} width="25" alt="" />
				</div>
				<div className="list-item">
					{Object.keys(item).toString() === "joiner_count" ?
						<p style={{ textTransform: "none" }}>Open to {item[Object.keys(item).toString()]} joiner(s)</p> : undefined}

					{Object.keys(item).toString() === "budget" ?
						<p style={{ textTransform: "none" }}>Php {item[Object.keys(item).toString()]} per joiner</p> : undefined}

					{Object.keys(item).toString() !== "joiner_count" &&
						Object.keys(item).toString() !== "budget" ? <p>{item[Object.keys(item).toString()]}</p> : undefined}
				</div>
			</div>)
	}

	if (newTourData.timeline) {
		showTimelineUI = newTourData.timeline.map((item, index) =>
			<div key={index} className="panel timelineList--item">
				<img src={require("../../assets/images/circle.png")} className="timeline-dot" alt="" />
				<div className="timelineList--inner">
					<div className="panel--header">
						<div className="flexbox-half">
							<h2 className="timeline--title flex-item">{item.title}</h2>
							<NavLink to={``} className="flex-end">Edit</NavLink>
						</div>
						<div className="timeline--date-time">
							<span className="timeline--date">{newTourData.details.calendar}</span> @ <span className="timeline--time">{item.time}</span>
						</div>
						<p>{item.description}</p>
					</div>
				</div>
			</div>)
	}

	return (
		<>
			<div className="newTour-timeline--wrapper">
				<div className="newTour-preview">
					<div className="panel">
						<div className="newTour-timeline--inner flexbox-half gap-15">
							<div className="flex-item newTour-timeline--about-wrapper">
								<div>
									<div className="flexbox-half">
										<p className="label-title theme flex-item">Tour Name</p>
										<NavLink to={""} className="flex-end">Edit</NavLink>
									</div>
									<h2 className="page-title nogaps">{newTourData.tourName}</h2>

									<div className="dialog-box">
										<p className="label-title theme flex-item">description</p>
										<p className="page-title nogaps">{newTourData.description}</p>
									</div>
								</div>

								<div className="dialog-box">
									<p className="label-title theme flex-item">Travel Agency</p>
									<p className="page-title nogaps">{userSession.userName}</p>
								</div>
							</div>
							<div className="flex-item newTour-timeline--details-wrapper">
								<div className="flexbox-half">
									<p className="label-title theme flex-item">Details</p>
									<NavLink to={""} className="flex-end">Edit</NavLink>
								</div>

								<div className="newTour--details-list">
									{showDetailsUI}
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="newTour-timeline-maker">
					<div id="timelineList">{showTimelineUI ? showTimelineUI : <p>No itineraries yet.</p>}</div>

					<div id="timelineForm">
						<div className="panel">
							<div className="panel--body">
								<form id="timelineForm" onSubmit={e => handleSubmit(e)}>
									<div className="form-control">
										<p className="label-title theme">title</p>
										<input type="text" className="input-control" name="title" value={timeline.title} onChange={e => handleInput(e)} />
									</div>

									<div className="form-control">
										<p className="label-title theme">time</p>
										<input type="time" className="input-control" name="time" value={timeline.time} onChange={e => handleInput(e)} />
									</div>

									<div className="form-control">
										<p className="label-title theme">description</p>
										<textarea className="input-control" rows="5" name="description" value={timeline.description} onChange={e => handleInput(e)}></textarea>
									</div>

									<div className="flexbox-half">
										<button type="submit" className="btn-link flex-item timelineForm-submit-btn">Save</button>
										{newTourData?.timeline ?
											<button type="submit" className="btn-link btn-theme flex-item timelineForm-submit-btn" onClick={e => publishTour(e)}>Publish</button>
											:
											undefined
										}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default FormTourTimeline;