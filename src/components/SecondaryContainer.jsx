import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
    const movies = useSelector((state) => state.movies);

    return (
        movies.nowPlayingMovies && (
            <div className="bg-black w-screen">
                <div className="-mt-52 pl-12 relative z-10">
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Trending"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Popular"}
                        movies={movies.popularMovies}
                    />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Horror"}
                        movies={movies.nowPlayingMovies}
                    />
                </div>
            </div>
        )
    );
}

export default SecondaryContainer;
