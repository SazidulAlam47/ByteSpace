import { Link } from "react-router";
import Header from "../../shared/Header";
import {
  avatar_2_b44979e1,
  avatar_3_3fe55918,
  frame_516,
  frame_542,
  frame_568,
  frame_594,
  frame_620,
  frame_646,
} from "../../assets";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0043FF] pb-16">
        
        <div className="pt-8 max-w-[1200px] mx-auto px-8">
          <h1
            className="text-white font-bold mb-8 text-center"
            style={{
              fontSize: '48px',
              lineHeight: '1.1',
              fontFamily: '"Clash Display", sans-serif',
            }}
          >
            Find Your Next Course
          </h1>

          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="🔍 Search"
                className="w-full px-6 py-4 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#CBFC01]"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              />
            </div>
            <button
              className="px-8 py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all flex items-center gap-2"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <span style={{ fontFamily: '"Satoshi", sans-serif' }}>🔽 Filter</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <span style={{ fontFamily: '"Satoshi", sans-serif' }}>📊 Level</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <span style={{ fontFamily: '"Satoshi", sans-serif' }}>📁 Category</span>
              </button>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <span style={{ fontFamily: '"Satoshi", sans-serif' }}>≡ Most relevant</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              className="px-6 py-3 bg-[#CBFC01] text-black font-medium rounded-full"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Featured
            </button>
            {[
              'Music',
              'Drawing & Painting',
              'Marketing',
              'Animation',
              'Social Media',
              'UI/UX Design',
              'Creative Marketing',
              'Cooking',
            ].map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                image: frame_516,
                title: 'Learn Figma from Basic',
                instructor: 'purepearl studio',
                avatar: avatar_2_b44979e1,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
              {
                image: frame_542,
                title: 'Build Digital Asset',
                instructor: 'purepearl studio',
                avatar: avatar_3_3fe55918,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
              {
                image: frame_568,
                title: 'the Power of Big Data',
                instructor: 'purepearl studio',
                avatar: avatar_2_b44979e1,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
              {
                image: frame_594,
                title: 'Balancing Productivity and Self-Care',
                instructor: 'purepearl studio',
                avatar: avatar_3_3fe55918,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
              {
                image: frame_620,
                title: 'Mastering Money Management',
                instructor: 'purepearl studio',
                avatar: avatar_2_b44979e1,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
              {
                image: frame_646,
                title: 'From Idea to Startup Success',
                instructor: 'purepearl studio',
                avatar: avatar_3_3fe55918,
                level: 'Beginner',
                rating: 4.5,
                price: 25,
              },
            ].map((course, index) => (

              <Link
                key={index}
                to="/course/details"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      📊 {course.level}
                    </span>
                    <div className="flex items-center gap-1 ml-auto">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      by {course.instructor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-bold text-[#0043FF]"
                      style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                      ${course.price}<span className="text-sm font-normal text-gray-500">/lifetime</span>
                    </span>
                    <div className="flex -space-x-2">
                      <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                      <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-xs font-bold">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
              ‹
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#0E52FF] text-white rounded-lg font-medium">
              1
            </button>
            {[2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
