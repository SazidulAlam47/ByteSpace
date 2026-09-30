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
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
import DiscoverSection from "./sections/DiscoverSection";
import CategoriesSection from "./sections/CategoriesSection";
import GrowthSection from "./sections/GrowthSection";
import InstructorSection from "./sections/InstructorSection";
import CTASection from "./sections/CTASection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
            <HeroSection />
      <PartnersSection />
      <DiscoverSection />
      <CategoriesSection />
      <GrowthSection />
      <InstructorSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
