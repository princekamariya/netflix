import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;
