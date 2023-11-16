import "./assets/css/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import AccountController from "./controllers/AccountController";
import AgencyAbout from "./pages/agency/AgencyAbout";
import AgencyPhotos from "./pages/agency/AgencyPhotos";
import AgencySettings from "./pages/agency/AgencySettings";
import SignUp from "./pages/SignUp";
import TourPage from "./pages/TourPage";
import toursEndpoint from "../src/assets/data/toursEndpoint";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import DynamicForm from "./controllers/DynamicForm";
import "./assets/css/rwd.css";

export const AppSessionContext = createContext();

const App = () => {
	const [userSession, setUserSession] = useState({});
	const [allTours, setAllTours] = useState(toursEndpoint);

	const handleLogOut = () => {
		setUserSession({ ...userSession, isActive: false });
	}

	const handleLogIn = (userData) => {
		setUserSession({ ...userData, isActive: true });
	}

	const handleAddTour = (newTourData) => {
		setAllTours([...allTours, newTourData]);
	}

	const handleEditTour = (editTourData) => {
		console.log(editTourData);
	}

	const router = createBrowserRouter([
		{
			path: "",
			element: <MainLayout handleLogOut={handleLogOut} handleLogIn={handleLogIn} />,
			children: [
				{
					path: "",
					element: <Landing allTours={allTours} />,
					children: [
						{
							path: "/blog/",
							element: "",
						}

					]
				},
				{
					path: "/sign-up",
					element: <SignUp />,
				},
			]
		},
		{
			path: "/:role/:userName",
			element: <MainLayout />,
			children: [
				{
					path: "/:role/:userName",
					element: <AccountController />,
					children: [
						{
							path: "/:role/:userName/",
							element: <ProfilePage allTours={allTours} />,
							children: [
								{
									path: "/:role/:userName/about",
									element: <AgencyAbout />,
								},
								{
									path: "/:role/:userName/photos",
									element: <AgencyPhotos />,
								},
								{
									path: "/:role/:userName/settings",
									element: <AgencySettings />
								},
							]
						},
						{
							path: "/:role/:userName/dashboard",
							element: <Dashboard allTours={allTours} />
						},
						{
							path: "/:role/:userName/profile",
							element: <ProfilePage />
						}
					]
				},
			],
		},
		{
			path: "/:role/:userName/add/:formName",
			element: <MainLayout />,
			children: [
				{
					path: "/:role/:userName/add/:formName",
					element: <DynamicForm />,
				},
			]
		},
		{
			path: "/:role/:userName/edit/:tourID/:formName",
			element: <MainLayout />,
			children: [
				{
					path: "/:role/:userName/edit/:tourID/:formName",
					element: <DynamicForm handleAddTour={handleAddTour} handleEditTour={handleEditTour} />,
				},
			]
		},
		{
			path: "/agency/:userName/:tourID/:tourName",
			element: <MainLayout />,
			children: [
				{
					path: "/agency/:userName/:tourID/:tourName",
					element: <TourPage allTours={allTours} />
				}
			]
		}
	])

	return (
		<div id="app">
			<AppSessionContext.Provider value={userSession}>
				<RouterProvider router={router} />
			</AppSessionContext.Provider>
		</div>
	)
}

export default App;