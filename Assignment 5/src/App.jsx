import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeView from "./Views/HomeView.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</Router>
	);
}

export default App;