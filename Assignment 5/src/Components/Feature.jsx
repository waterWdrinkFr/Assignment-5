import axios from "axios";
import { useEffect, useState } from "react";

function Feature(){
    const [movies, setMovies] = useState([])

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
            setMovies(shuffle(response.data.results))
        })();
    }, []);

    return(
        <div>
        </div>
    )
}

export default Feature