import { Link, useLocation } from "react-router-dom";

function Genres({ genres }) {
    const location = useLocation();

    return (
        <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Genres</h3>
            <div className="flex flex-wrap gap-2">
                {genres.map((genre) => {
                    const isActive = location.pathname === `/movies/genre/${genre.id}`;

                    return (
                        <button key={genre.id} className={`px-4 py-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : 
                            "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                            <Link to={`/movies/genre/${genre.id}`} className="no-underline" > {genre.genre} </Link>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Genres;