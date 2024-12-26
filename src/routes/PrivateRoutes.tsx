import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();
	return auth.isAuthenticated ? children : <Navigate to='/login' />;
};
