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

export default function CTASection() {
  return (
    <>
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
    </>
  );
}
