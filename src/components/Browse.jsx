import React from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

function Browse() {
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;
