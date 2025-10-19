import React from "react";
import Header from "./Header";
import { useState } from "react";

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
                    alt="background_img"
                />
            </div>
            <form className="w-3/12 absolute p-12 bg-black/75 my-36 mx-auto left-0 right-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already registerd Sign In Now"}
                </p>
            </form>
        </div>
    );
}

export default Login;
