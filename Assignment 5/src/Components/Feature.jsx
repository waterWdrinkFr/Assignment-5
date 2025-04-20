import {useEffect, useState} from "react";
import axios from "axios";

function Feature() {
    const [movies, setMovies] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(shuffle(response.data.results).slice(0, 3));
        })();
    }, []);

    return (
        <div className="p-15">
            <h2 className="text-2xl font-bold text-center text-white mt-[9%]">Now Playing</h2>
            <div className="flex flex-wrap justify-center gap-18">
                {movies.map((movie) => (
                    <div key={movie.id} className="mt-[1%] w-[20%] h-[5%] bg-sky-600 text-white rounded-lg overflow-hidden shadow-lg">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-[85%] object-cover"/>
                        <div className="p-2 text-center"> <h3 className="text-sm font-bold">{movie.title}</h3> </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feature;