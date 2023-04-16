import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PageLayout } from "./layout/PageLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PageLayout />}>
                <Route path="/" element={<HomePage/>} />
            </Route>
        </>
    ),
    { basename: "/" }
);
