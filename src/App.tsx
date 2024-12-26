import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ErrorBoundary } from "./error/ErrorBoundary";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
	return (
		<ErrorBoundary>
			<AuthProvider>
				<Router>
					<AppRoutes />
				</Router>
			</AuthProvider>
		</ErrorBoundary>
	);
}

export default App;
