import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

function GptSearch() {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className="h-screen object-cover w-screen"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
                    alt="background_img"
                />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    );
}

export default GptSearch;
