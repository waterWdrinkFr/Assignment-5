import React, { useEffect, useState } from "react";
import axios from "axios";

function Genres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
                );
                setGenres(
                    response.data.genres.filter((genre) =>
                        [12, 18, 16, 80, 10751, 14, 36, 27, 9648, 878, 10752, 37].includes(genre.id)
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
            <h2 className="text-2xl font-bold mb-127.5">Specific Genres</h2>
            <ul className="list-disc pl-5">
                {genres.map((genre) => (
                    <li key={genre.id} className="text-lgt text-white">
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Genres;