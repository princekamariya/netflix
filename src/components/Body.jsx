import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
function Body() {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
