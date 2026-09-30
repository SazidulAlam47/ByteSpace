import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0E1116]">
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
