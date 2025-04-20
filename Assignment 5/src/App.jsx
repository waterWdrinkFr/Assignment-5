import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomeView from "./Views/HomeView.jsx";
import MoviesView from "./Views/MoviesView.jsx";
import GenreView from "./Views/GenreView.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeView />}/>
				<Route path="/movies" element={<MoviesView />}>
                    <Route path=":genre_id" element={<GenreView />} />
                </Route>
			</Routes>
		</Router>
	);
}

export default App;