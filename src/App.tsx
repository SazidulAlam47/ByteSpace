import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLessons from "./pages/CourseLessons/CourseLessons";
import CourseReviews from "./pages/CourseReviews/CourseReviews";
import CreatorProfile from "./pages/CreatorProfile/CreatorProfile";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      {/* Background color placeholder to make the white header text visible */}
      <div className="min-h-screen bg-[#0E1116]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/details" element={<CourseDetails />} />
          <Route path="/course/lessons" element={<CourseLessons />} />
          <Route path="/course/reviews" element={<CourseReviews />} />
          <Route path="/creator/profile" element={<CreatorProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
