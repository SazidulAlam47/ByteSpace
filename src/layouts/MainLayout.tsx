import { Outlet } from "react-router";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0E1116]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
