import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLessons from "./pages/CourseLessons/CourseLessons";
import CourseReviews from "./pages/CourseReviews/CourseReviews";
import CreatorProfile from "./pages/CreatorProfile/CreatorProfile";
import SearchPage from "./pages/SearchPage/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-[#0E1116]">
        <Outlet />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/course/details", element: <CourseDetails /> },
      { path: "/course/lessons", element: <CourseLessons /> },
      { path: "/course/reviews", element: <CourseReviews /> },
      { path: "/creator/profile", element: <CreatorProfile /> },
      { path: "/search", element: <SearchPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
