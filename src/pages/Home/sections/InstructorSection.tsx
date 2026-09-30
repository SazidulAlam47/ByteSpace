import React from 'react';
import { Link } from 'react-router';
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
} from "../../../assets";
import Header from "../../../shared/Header";
import CourseCard from "../../../components/CourseCard";
import CategoryCard from "../../../components/CategoryCard";
import TestimonialCard from "../../../components/TestimonialCard";

export default function InstructorSection() {
  return (
    <>
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
    </>
  );
}
