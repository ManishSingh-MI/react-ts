import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const AppRoutes = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Routes>
			<Route
				path='/'
				element={
					isAuthenticated ? (
						<Navigate to='/dashboard' />
					) : (
						<Navigate to='/login' />
					)
				}
			/>
			<Route path='/login' element={<Login />} />
			<Route
				path='/dashboard'
				element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
