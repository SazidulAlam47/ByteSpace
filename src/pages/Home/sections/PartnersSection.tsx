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

export default function PartnersSection() {
  return (
    <>
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
    </>
  );
}
