import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function GenreView() {
    const { genre_id } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
            );
            setMovies(response.data.results);
        }
        fetchMovies();
    }, [genre_id, page]);

    return (
        <div className="mt-[100px] p-4">
            <div className="grid grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-auto rounded-md mb-2"
                            />
                            <h3 className="text-lg font-bold">{movie.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setPage(page-1)}
                disabled={page === 1}
                className="mt-4 ml-113.5 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Previous
            </button>
            <span className="text-lg font-bold">Page {page}</span>
            <button
                onClick={() => setPage(page+1)}
                className="mt-4 ml- px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}

export default GenreView;