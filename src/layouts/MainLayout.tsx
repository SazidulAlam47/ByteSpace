import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0E1116]">
            <Outlet />
        </div>
    );
};

export default MainLayout;
