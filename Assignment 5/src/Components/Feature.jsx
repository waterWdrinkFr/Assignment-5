import axios from "axios";
import { useEffect, useState } from "react";

function Feature(){
    const [movies, setMovies] = useState([])

    function shuffle(array) {
        let currentIndex = array.length;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array
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