import { Outlet } from "react-router-dom";
import "../assets/css/agency.css";
import "../assets/css/accounts.css";

const AccountController = () => {

	return (
		<div id="account">
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}

export default AccountController;