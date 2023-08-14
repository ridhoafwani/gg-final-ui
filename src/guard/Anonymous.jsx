import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Anonymous() {
	const { user } = useAuthContext();
	const location = useLocation();

	if (user) {
		if (location.state) {
			return <Navigate to={location.state.from} replace />;
		}
		return <Navigate to="/" replace />;
	}
	return <Outlet />;
}
