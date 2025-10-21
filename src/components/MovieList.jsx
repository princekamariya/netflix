import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
    return (
        <div className="px-6">
            <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
            <div
                className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div className="flex flex-nowrap space-x-4 scrollbar-hide">
                    {movies &&
                        movies.map((movie) => (
                            <div
                                key={movie.id || movie.key}
                                className="min-w-[200px]"
                            >
                                <MovieCard posterPath={movie.poster_path} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
