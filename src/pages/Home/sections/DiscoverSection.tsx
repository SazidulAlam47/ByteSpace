import React from 'react';
import { Link } from 'react-router';
import {
  avatar_2_b44979e1,
  avatar_3_3fe55918,
  frame_516,
  frame_542,
  frame_568,
  frame_594,
  frame_620,
  frame_646
} from "../../../assets";
import CourseCard from "../../../components/CourseCard";

export default function DiscoverSection() {
  const courses = [
    {
      image: frame_516,
      title: 'Learn Figma from Basic',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    },
    {
      image: frame_542,
      title: 'Build Digital Asset',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    },
    {
      image: frame_568,
      title: 'the Power of Big Data',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    },
    {
      image: frame_594,
      title: 'Balancing Productivity and Self-Care',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    },
    {
      image: frame_620,
      title: 'Mastering Money Management',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    },
    {
      image: frame_646,
      title: 'From Idea to Startup Success',
      instructor: 'purepearl studio',
      level: 'Beginner',
      rating: 4.5,
      price: 25,
    }
  ];

  return (
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
            Discover Top Courses<br />and Advance Your Skills
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
          >
            Embark on a journey of continuous learning with our extensive library of top-rated courses. Enhance your expertise, broaden your horizons, and stay ahead in today's competitive landscape.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-gray-200 pb-4">
          <div className="flex gap-8 overflow-x-auto pb-2 -mb-[18px]">
            {['All', 'Design', 'Development', 'IT & Business'].map((tab, idx) => (
              <button
                key={idx}
                className={`pb-4 font-medium whitespace-nowrap ${idx === 0 ? 'text-[#0043FF] border-b-2 border-[#0043FF]' : 'text-gray-500 hover:text-black'}`}
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            className="px-8 py-4 border-2 border-[#0E1116] text-[#0E1116] font-bold rounded-full hover:bg-[#0E1116] hover:text-white transition-all"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
