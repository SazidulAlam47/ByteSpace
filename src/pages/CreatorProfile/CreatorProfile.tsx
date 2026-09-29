import { Link } from "react-router";
import Header from "../../shared/Header";
import {
  avatar_2_b44979e1,
  course_thumb_1_c8826419,
  course_thumb_20_93ad9f9e,
  course_thumb_21_72e18d90,
  course_thumb_22_a8978945,
  course_thumb_23_69362b02,
  course_thumb_24_a7c9406f,
  avatar_3_3fe55918,
} from "../../assets";

export default function CreatorProfile() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Creator Hero Section */}
      <section className="bg-[#0E52FF] pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-start gap-8">
            <img
              src={avatar_2_b44979e1}
              alt="PurePearl Studio"
              className="w-32 h-32 rounded-3xl"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1
                  className="text-white font-bold"
                  style={{
                    fontSize: '48px',
                    lineHeight: '1.1',
                    fontFamily: '"Clash Display", sans-serif',
                  }}
                >
                  PurePearl Studio
                </h1>
                <span className="px-4 py-2 bg-[#CBFC01] text-black text-sm font-bold rounded-full">
                  Creator
                </span>
              </div>
              <p
                className="text-white/90 mb-6 text-lg"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Passionate UI/UX, Web designer
              </p>
              <p
                className="text-white/80 mb-8 max-w-3xl leading-relaxed"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
                <br /><br />
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    3 Products
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    12 Followers
                  </span>
                </div>
                <button
                  className="ml-auto px-8 py-3 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Filters */}
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

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: course_thumb_1_c8826419,
                title: 'Learn Figma from Basic',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
              {
                image: course_thumb_20_93ad9f9e,
                title: 'Build Digital Asset',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
              {
                image: course_thumb_21_72e18d90,
                title: 'the Power of Big Data',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
              {
                image: course_thumb_22_a8978945,
                title: 'Balancing Productivity and',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
              {
                image: course_thumb_23_69362b02,
                title: 'Mastering Money Managem...',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
              {
                image: course_thumb_24_a7c9406f,
                title: 'From Idea to Startup Succe',
                instructor: 'purepearl studio',
                level: 'Beginner',
                rating: 4.5,
                price: 25,
                students: [avatar_2_b44979e1, avatar_3_3fe55918],
              },
            ].map((course, index) => (
              <Link
                key={index}
                to="/course/details"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2 text-xs">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-medium">
                      17 Lessons
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-medium">
                      2 hours 16 mins
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-medium">
                      69 Comments
                    </span>
                  </div>
                </div>
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
                    <span className="text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      by {course.instructor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-bold text-[#0E52FF]"
                      style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                      ${course.price}<span className="text-sm font-normal text-gray-500">/lifetime</span>
                    </span>
                    <div className="flex -space-x-2">
                      {course.students.map((student, i) => (
                        <img
                          key={i}
                          src={student}
                          alt=""
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-xs font-bold">
                        26+
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
