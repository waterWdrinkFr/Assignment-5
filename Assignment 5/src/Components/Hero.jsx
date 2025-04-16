import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Hero() {
    const [movies, setMovies] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    useEffect(() => {
        (async function fetchTopRatedMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(shuffle(response.data.results).slice(0, 10));
        })();
    }, []);

    return (
        <div className="relative top-[110px] w-full">
            <Swiper modules={[Navigation, Pagination, Autoplay]} navigation autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true} className="w-full h-[600px]"> {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative w-full h-full">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-full h-full object-cover"/>
                            <div className="absolute bottom-0 left-0 w-full h-[100px] p-4 bg-gradient-to-t from-black to-transparent text-white">
                                <h2 className="mt-1 text-2xl font-bold">Top Rated: {movie.title}</h2>
                                <button className="px-4 py-2 bg-sky-600 text-white font-bold rounded-lg cursor-pointer"> Watch Now </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;