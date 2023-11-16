import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = ({ handleLogOut, handleLogIn }) => {

	return (
		<>
			<Navbar handleLogOut={handleLogOut} />

			<div id="mainLayout">
				<Outlet />
			</div>

			<Footer handleLogIn={handleLogIn} />
		</>
	)
}

export default MainLayout;