import { Link } from "react-router";
import {
  bytespace_logo,
  avatar_2_b44979e1,
  avatar_3_3fe55918,
  avatar_4_0577f0e9,
  image_16_6be36b89,
  image_17_d5e9c4dc,
  image_13_e3b55902,
  image_343,
  cone_01_1,
  cone_01_2,
  frame_516,
  frame_542,
  frame_568,
  frame_594,
  frame_620,
  frame_646
} from "../../assets";

import Header from "../../shared/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0043FF] min-h-[1024px] overflow-hidden">
        <Header />
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)',
              backgroundSize: '100px 100px',
            }}
          ></div>
        </div>

        {/* Decorative Background Ellipse */}
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.15) 0%, transparent 70%)',
          }}
        ></div>

        {/* Decorative 3D Shapes */}
        <img src={cone_01_1} alt="3D Cone" className="absolute top-[200px] left-[100px] w-[150px] opacity-60" />
        <img src={cone_01_2} alt="3D Cone" className="absolute bottom-[150px] right-[150px] w-[120px] opacity-60" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-8">
          {/* Hero Content */}
          <div className="pt-[80px] pb-[100px]">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-white font-bold mb-6"
                style={{
                  fontSize: '72px',
                  lineHeight: '1.1',
                  fontFamily: '"Clash Display", sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Get Access to Hundreds Courses Available
              </h1>
              <p
                className="text-white/80 mb-8 text-lg max-w-2xl mx-auto"
                style={{ fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
              >
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
              </p>

              {/* Search Bar */}
              <div className="flex gap-3 max-w-2xl mx-auto mb-12">
                <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-6 py-2 border-none focus-within:ring-2 focus-within:ring-[#CBFC01]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#82868E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="#82868E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Course, topic, creator"
                    className="w-full py-2 bg-transparent text-gray-900 placeholder-[#82868E] border-none focus:outline-none text-lg"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>
                <button
                  className="px-8 py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
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
                    <img src={image_343} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <div className="text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Learning Progress
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
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
                      <div className="text-xs font-bold text-gray-900" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        Happy Students
                      </div>
                      <div className="text-xs font-bold mt-1 text-gray-900" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        4.5 <span className="text-gray-400 font-normal">(240)</span> ⭐
                      </div>
                    </div>
                  </div>
                  <div className="flex -space-x-2 mt-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_4_0577f0e9} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
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

      {/* Logo Partners Section */}
      <section className="bg-[#F8F9FA] py-12">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between gap-12 opacity-40">
            <div className="text-2xl font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Logipsum</div>
            <div className="text-2xl font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Logipsum</div>
            <div className="text-2xl font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Logipsum</div>
            <div className="text-2xl font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Logipsum</div>
            <div className="text-2xl font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Logipsum</div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-[#0E1116] font-bold mb-4"
              style={{
                fontSize: '56px',
                lineHeight: '1.1',
                fontFamily: '"Clash Display", sans-serif',
              }}
            >
              Discover Your Passion,<br />Build Your Skills
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto"
              style={{ fontSize: '18px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
            >
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-6 py-3 bg-[#CBFC01] text-black font-medium rounded-full" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              All
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Design & Painting
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Accounting
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Animation
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Social Media
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              UI/UX Design
            </button>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_516} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Learn Figma from Basic
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_542} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Build Digital Asset
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_568} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  the Power of Big Data
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Add 3 more course cards */}
            {/* Course Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_594} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Balancing Productivity and Self-Care
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Course Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_620} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Mastering Money Management
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Course Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              <img src={frame_646} alt="Course" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                <span className="text-sm font-bold text-gray-700">4.5</span>
                <span className="text-yellow-500 text-xs">⭐</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  From Idea to Startup Success
                </h3>
                <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-gray-500">by </span>
                  <span className="text-[#0043FF] font-medium">purepearl studio</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    📈 Beginner
                  </span>
                  <div className="flex -space-x-2">
                    <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
                      26+
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    $25
                  </span>
                  <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Diverse Learning Paths */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-[#0E1116] font-bold mb-4"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                fontFamily: '"Clash Display", sans-serif',
              }}
            >
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto"
              style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
            >
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* Category Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                🎨
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Design
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                💻
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Development
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                💼
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                IT & Business
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                💰
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Business
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                📈
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Marketing
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
                📷
              </div>
              <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Photography
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Growth Section */}
      <section className="py-20 bg-[#0E1116]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-white font-bold mb-6"
                style={{
                  fontSize: '48px',
                  lineHeight: '1.1',
                  fontFamily: '"Clash Display", sans-serif',
                }}
              >
                Your Path to Professional Growth Starts Here!
              </h2>
              <p
                className="text-gray-300 mb-8"
                style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
              >
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div
                    className="text-4xl font-bold text-[#CBFC01] mb-2"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                  >
                    12K
                  </div>
                  <p className="text-sm text-gray-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Students
                  </p>
                </div>
                <div>
                  <div
                    className="text-4xl font-bold text-[#CBFC01] mb-2"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                  >
                    70+
                  </div>
                  <p className="text-sm text-gray-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Courses
                  </p>
                </div>
                <div>
                  <div
                    className="text-4xl font-bold text-[#CBFC01] mb-2"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                  >
                    16
                  </div>
                  <p className="text-sm text-gray-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Creators
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={image_17_d5e9c4dc}
                alt="Professional with tablet"
                className="w-full h-auto relative z-10"
              />

              {/* Floating Stats Card */}
              <div className="absolute top-[20%] right-[-40px] bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-[#0E52FF] mb-2" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                  55%
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Completion Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create & Manage Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={image_13_e3b55902}
                alt="Course creator"
                className="w-full h-auto relative z-10"
              />

              {/* Floating Course Card */}
              <div className="absolute bottom-[10%] right-[-40px] bg-[#0E52FF] text-white rounded-2xl p-4 shadow-xl">
                <div className="text-sm font-medium mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  My Courses
                </div>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                  18,042
                </div>
                <div className="text-xs opacity-80" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Total Students
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2
                className="text-[#0E1116] font-bold mb-6"
                style={{
                  fontSize: '48px',
                  lineHeight: '1.1',
                  fontFamily: '"Clash Display", sans-serif',
                }}
              >
                Create & Manage Courses Easily.
              </h2>
              <p
                className="text-gray-600 mb-8"
                style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
              >
                ByteSpace supports instructors in creating or editing their courses, publishing them on our platform, and managing subscribers with ease.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#CBFC01] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Share Your Expertise
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Create courses that showcase your unique skills and knowledge
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#CBFC01] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Effortless Platform
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Intuitive tools that make course creation simple and efficient
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#CBFC01] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Build a Community
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Connect with learners and grow your influence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#0043FF] py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)',
              backgroundSize: '100px 100px',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
          <h2
            className="text-white font-bold mb-6 max-w-3xl mx-auto"
            style={{
              fontSize: '56px',
              lineHeight: '1.1',
              fontFamily: '"Clash Display", sans-serif',
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p
            className="text-white/80 mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '18px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
          >
            Experience the collaboration of impactful creators on ByteSpace. Create unique and amazing courses to share your expertise with millions of users worldwide. Learn new tools and strategies to stay relevant in the ever-changing industry.
          </p>
          <button
            className="px-10 py-5 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all text-lg"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Join as Instructor
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-[#0E1116] font-bold mb-4"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                fontFamily: '"Clash Display", sans-serif',
              }}
            >
              Discover What Our<br />Community is Saying
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src={avatar_2_b44979e1} alt="Sarah M." className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Sarah M.
                  </h3>
                  <p className="text-[#0E52FF] text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Enthusiastic Learner
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src={avatar_3_3fe55918} alt="James L." className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    James L.
                  </h3>
                  <p className="text-[#0E52FF] text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Lifelong Learner
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src={avatar_4_0577f0e9} alt="Alex B." className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Alex B.
                  </h3>
                  <p className="text-[#0E52FF] text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Inspired Creator
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Newsletter */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={bytespace_logo} alt="ByteSpace" className="w-[24px] h-[26px]" />
                <span className="font-bold text-xl" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                  ByteSpace
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-full text-sm"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                />
                <button
                  className="px-6 py-2 bg-[#CBFC01] text-black font-medium rounded-full hover:bg-[#b8e301] transition-colors shrink-0"
                  style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '14px' }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Featured Courses */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Featured Courses
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    IT
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Development
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Become a Creator */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Become a Creator
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/creators" className="text-gray-600 hover:text-black">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-600 hover:text-black">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p style={{ fontFamily: '"Satoshi", sans-serif' }}>© 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
