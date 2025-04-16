import {Link} from "react-router-dom";

function Genres({ genres }) {
    return (
        <div className="genres-container">
            <h3>Genres</h3>
            <div className="genres-buttons">
                {genres.map((genre) => (
                    <button key={genre.id} className="genre-button">
                        <Link to={`/movies/genre/${genre.id}`} className="genre-link">
                            {genre.genre}
                        </Link>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Genres;