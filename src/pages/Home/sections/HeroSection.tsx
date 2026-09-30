import {
    avatar_2_b44979e1,
    avatar_3_3fe55918,
    avatar_4_0577f0e9,
    image_16_6be36b89,
    image_343,
    cone_01_1,
    cone_01_2,
} from "../../../assets";

export default function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[#0043FF] min-h-[1024px] overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)",
                            backgroundSize: "100px 100px",
                        }}
                    ></div>
                </div>

                {/* Decorative Background Ellipse */}
                <div
                    className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(203, 252, 1, 0.15) 0%, transparent 70%)",
                    }}
                ></div>

                {/* Decorative 3D Shapes */}
                <img
                    src={cone_01_1}
                    alt="3D Cone"
                    className="absolute top-[200px] left-[100px] w-[150px] opacity-60"
                />
                <img
                    src={cone_01_2}
                    alt="3D Cone"
                    className="absolute bottom-[150px] right-[150px] w-[120px] opacity-60"
                />

                {/* Content Container */}
                <div className="relative z-10 max-w-[1200px] mx-auto px-8">
                    {/* Hero Content */}
                    <div className="pt-[80px] pb-[100px]">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1
                                className="text-white font-bold mb-6"
                                style={{
                                    fontSize: "72px",
                                    lineHeight: "1.1",
                                    fontFamily: '"Clash Display", sans-serif',
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Get Access to Hundreds Courses Available
                            </h1>
                            <p
                                className="text-white/80 mb-8 text-lg max-w-2xl mx-auto"
                                style={{
                                    fontFamily: '"Satoshi", sans-serif',
                                    lineHeight: "1.6",
                                }}
                            >
                                Unlock your creativity, gain valuable knowledge,
                                and grow your business with our wide range of
                                courses.
                            </p>

                            {/* Search Bar */}
                            <div className="flex gap-3 max-w-2xl mx-auto mb-12">
                                <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-6 py-2 border-none focus-within:ring-2 focus-within:ring-[#CBFC01]">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                            stroke="#82868E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 21L16.65 16.65"
                                            stroke="#82868E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Course, topic, creator"
                                        className="w-full py-2 bg-transparent text-gray-900 placeholder-[#82868E] border-none focus:outline-none text-lg"
                                        style={{
                                            fontFamily: '"Satoshi", sans-serif',
                                        }}
                                    />
                                </div>
                                <button
                                    className="px-8 py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all"
                                    style={{
                                        fontFamily: '"Satoshi", sans-serif',
                                    }}
                                >
                                    Search
                                </button>
                            </div>

                            {/* Hero Image - Person with Tablet */}
                            <div className="relative max-w-xl mx-auto">
                                <img
                                    src={image_16_6be36b89}
                                    alt="Student with tablet"
                                    className="w-full h-auto relative z-10"
                                />

                                {/* Floating Stats Card - Student Progress */}
                                <div className="absolute top-[20%] left-[-80px] bg-white rounded-2xl p-4 shadow-xl z-20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <img
                                            src={image_343}
                                            alt=""
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div
                                            className="text-sm font-medium"
                                            style={{
                                                fontFamily:
                                                    '"Satoshi", sans-serif',
                                            }}
                                        >
                                            Learning Progress
                                        </div>
                                    </div>
                                    <div
                                        className="text-3xl font-bold text-[#0043FF]"
                                        style={{
                                            fontFamily:
                                                '"Clash Display", sans-serif',
                                        }}
                                    >
                                        55%
                                    </div>
                                    <div className="w-24 h-2 bg-gray-200 rounded-full mt-2">
                                        <div className="w-[55%] h-full bg-[#CBFC01] rounded-full"></div>
                                    </div>
                                </div>

                                {/* Floating Happy Students Card */}
                                <div className="absolute bottom-[10%] left-[-100px] bg-white rounded-2xl p-4 shadow-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <div
                                                className="text-xs font-bold text-gray-900"
                                                style={{
                                                    fontFamily:
                                                        '"Satoshi", sans-serif',
                                                }}
                                            >
                                                Happy Students
                                            </div>
                                            <div
                                                className="text-xs font-bold mt-1 text-gray-900"
                                                style={{
                                                    fontFamily:
                                                        '"Satoshi", sans-serif',
                                                }}
                                            >
                                                4.5{" "}
                                                <span className="text-gray-400 font-normal">
                                                    (240)
                                                </span>{" "}
                                                ⭐
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -space-x-2 mt-2">
                                        <img
                                            src={avatar_2_b44979e1}
                                            alt=""
                                            className="w-6 h-6 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src={avatar_3_3fe55918}
                                            alt=""
                                            className="w-6 h-6 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src={avatar_4_0577f0e9}
                                            alt=""
                                            className="w-6 h-6 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src={avatar_2_b44979e1}
                                            alt=""
                                            className="w-6 h-6 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src={avatar_3_3fe55918}
                                            alt=""
                                            className="w-6 h-6 rounded-full border-2 border-white"
                                        />
                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold">
                                            2K+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
