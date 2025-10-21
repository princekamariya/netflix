import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(
            email.current.value,
            password.current.value
        );

        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    await updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZIOw_o4aMw44aSD0VjbWV8OvpiqPcsnLCg&s",
                    });

                    // ✅ Refresh auth.currentUser after profile update
                    await auth.updateCurrentUser(user);

                    const { uid, email, displayName, photoURL } =
                        auth.currentUser;

                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        })
                    );
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="h-screen w-screen object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
                    alt="background_img"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black/75 my-36 mx-auto left-0 right-0 text-white rounded-lg"
            >
                <h1 className="font-bold text-3xl ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500 text-lg text-bold py-2">
                    {errorMessage}
                </p>
                <button
                    className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
                    onClick={handleButtonClick}
                >
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
