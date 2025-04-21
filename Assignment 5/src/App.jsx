import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView.jsx";
import MoviesView from "./Views/MoviesView.jsx";
import GenreView from "./Views/GenreView.jsx";
import DetailView from "./Views/DetailView.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/movies" element={<MoviesView />}>
                    <Route index element={<Navigate to="28" replace />} />
                    <Route path=":genre_id" element={<GenreView />} />
                    <Route path="details/:id" element={<DetailView />} /> {/* Nested route */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;