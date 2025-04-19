import React, { useEffect, useState } from "react";
import axios from "axios";

function Genres() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(28);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
                );
                setGenres(
                    response.data.genres.filter((genre) =>
                        [28, 12, 16, 80, 10751, 14, 36, 27, 9648, 878, 10752, 37].includes(genre.id)
                    )
                );
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mt-[110px]">Genres</h2>
            <ul className="list-none pl-0">
                {genres.map((genre) => (
                    <li key={genre.id} className="mb-3">
                        <button
                            className={`px-4 py-2 text-xl font-bold cursor-pointer whitespace-nowrap ${
                                selectedGenre === genre.id ? "underline text-sky-600" : "text-white"
                            }`}
                            onClick={() => setSelectedGenre(genre.id)}
                        >
                            {genre.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Genres;