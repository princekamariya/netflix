import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const langKey = useSelector((store) => store.config.lang);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between justify-center">
            <img
                className="w-44 mx-auto md:mx-0"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && (
                <div className="flex p-2 justify-between">
                    {showGptSearch && (
                        <select
                            className="p-2 m-2 bg-gray-900 text-white"
                            onChange={handleLanguageChange}
                            value={langKey}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        className="bg-white text-black p-2 m-2  rounded-md hover:bg-white/80 cursor-pointer"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    <img
                        className="w-12 h-12 hidden md:block"
                        src={user.photoURL}
                        alt="user_icon"
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white"
                    >
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;
