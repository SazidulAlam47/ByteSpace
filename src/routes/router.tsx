import { createBrowserRouter, Outlet } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import CourseLessons from "../pages/CourseLessons/CourseLessons";
import CourseReviews from "../pages/CourseReviews/CourseReviews";
import CreatorProfile from "../pages/CreatorProfile/CreatorProfile";
import SearchPage from "../pages/SearchPage/SearchPage";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/course/details", element: <CourseDetails /> },
            { path: "/course/lessons", element: <CourseLessons /> },
            { path: "/course/reviews", element: <CourseReviews /> },
            { path: "/creator/profile", element: <CreatorProfile /> },
            { path: "/search", element: <SearchPage /> },
        ],
    },
    {
        element: <div className="min-h-screen bg-[#0E1116]"><Outlet /></div>,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    }
]);

export default router;
