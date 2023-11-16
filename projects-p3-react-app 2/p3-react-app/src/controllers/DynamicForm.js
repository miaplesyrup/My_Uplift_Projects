import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AppSessionContext } from "../App";
import { customAlphabet } from "nanoid";
import { replaceString } from "../plugins/helpers";
import FormTourName from "../components/dynamicForms/FormTourName";
import FormTourDesc from "../components/dynamicForms/FormTourDesc";
import FormTourDetails from "../components/dynamicForms/FormTourDetails";
import FormTourTimeline from "../components/dynamicForms/FormTourTimeline";
import "../assets/css/newTour.css";

export const NewTourDataContext = createContext();

const DynamicForm = ({ handleAddTour }) => {
	const userSession = useContext(AppSessionContext);
	const navigate = useNavigate();
	const [newTourData, setNewTourData] = useState({});
	const { formName } = useParams();
	const nanoid = customAlphabet('a12b34c5d6e78f90', 10);
	let showForm = "";

	// if NO session, redirect to homepage
	useEffect(() => {
		if (!userSession.isActive) {
			navigate("/");
		}
	}, [userSession.isActive, navigate])


	const handleNewTourData = (newData) => {
		if (!newTourData.tourID) {
			setNewTourData({ ...newTourData, tourID: nanoid(), ...newData });
		} else {
			if (!newTourData.timeline && newData.timeline_id) {
				setNewTourData({ ...newTourData, timeline: [{ ...newData }] });
			} else {
				// if incoming data has timeline_id
				if (newData.timeline_id) {
					setNewTourData({ ...newTourData, timeline: [...newTourData.timeline, { ...newData }] });
				} else {
					setNewTourData({ ...newTourData, ...newData });
				}
			}
		}
	}

	const publishTour = () => {
		handleAddTour({
			userID: userSession.userID,
			userName: userSession.userName,
			userRole: userSession.userRole,
			tour: {
				status: "published",
				tourID: newTourData.tourID,
				tourName: newTourData.tourName,
				images: ["coverPhoto.png"],
				description: newTourData.description,
				details: {
					...newTourData.details
				},
				timeline: [
					...newTourData.timeline
				]
			}
		});

		setNewTourData({});
		navigate(`/agency/${cleanURL(userSession.userName)}/dashboard`);
	}

	const cleanURL = (string) => {
		if (string) {
			return replaceString(string, /[^A-Za-z-]/g, "-").substring(0, string.length - 1).toLowerCase();
		}
	}

	switch (formName) {
		case "tour-name":
			showForm = <FormTourName handleNewTourData={handleNewTourData} />
			break;
		case "tour-description":
			showForm = <FormTourDesc handleNewTourData={handleNewTourData} />
			break;
		case "tour-details":
			showForm = <FormTourDetails handleNewTourData={handleNewTourData} />
			break;
		case "timeline":
			showForm = <FormTourTimeline handleNewTourData={handleNewTourData} publishTour={publishTour} />
			break;
		default:
			break;
	}

	return (
		<div id="newTour">
			<div className="container">
				<NewTourDataContext.Provider value={[userSession, newTourData]}>
					{showForm}
				</NewTourDataContext.Provider>
			</div>
		</div>
	)
}

export default DynamicForm;