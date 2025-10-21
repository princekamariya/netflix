import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

function GptSearch() {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
                    alt="background_img"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    );
}

export default GptSearch;
