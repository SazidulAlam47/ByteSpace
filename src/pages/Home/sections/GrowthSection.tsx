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

export default function GrowthSection() {
  return (
    <>
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
    </>
  );
}
