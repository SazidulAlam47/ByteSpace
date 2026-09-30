import { Link } from "react-router";
import { bytespace_logo, header_nav_menu_style_outlined } from "../assets";

const Header = () => {
    return (
        <header className="w-full h-[120px] flex items-center relative z-50 bg-[#0043FF]">
            <div className="w-full max-w-[1440px] mx-auto px-[122px] flex items-center justify-between relative">
                
                <Link to="/" className="flex items-center gap-[8px]">
                    <img src={bytespace_logo} alt="ByteSpace Icon" className="w-[29px] h-[32px]" />
                    <span 
                        className="text-[#F5F5F6] font-bold tracking-wide"
                        style={{ fontSize: '24px', lineHeight: '30px', fontFamily: '"Clash Display", sans-serif' }}
                    >
                        ByteSpace
                    </span>
                </Link>

                <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
                    <Link 
                        to="/" 
                        className="text-[#F5F5F6]"
                        style={{ fontWeight: 500, fontSize: '16px', lineHeight: '19px', fontFamily: '"Satoshi", sans-serif' }}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/courses" 
                        className="text-[#F5F5F6]"
                        style={{ fontWeight: 400, fontSize: '16px', lineHeight: '26px', fontFamily: '"Satoshi", sans-serif' }}
                    >
                        Courses
                    </Link>
                    <Link 
                        to="/creators" 
                        className="text-[#F5F5F6]"
                        style={{ fontWeight: 400, fontSize: '16px', lineHeight: '26px', fontFamily: '"Satoshi", sans-serif' }}
                    >
                        Creators
                    </Link>
                </nav>

                <div className="flex items-center gap-6">
                    <Link 
                        to="/login" 
                        className="text-[#F5F5F6]"
                        style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', fontFamily: '"Satoshi", sans-serif' }}
                    >
                        Sign In
                    </Link>
                    <Link 
                        to="/register" 
                        className="text-[#F5F5F6]"
                        style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', fontFamily: '"Satoshi", sans-serif' }}
                    >
                        Join Us
                    </Link>
                    <button className="w-6 h-6 flex items-center justify-center cursor-pointer ml-1">
                        <img src={header_nav_menu_style_outlined} alt="Menu" className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
