import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
import DiscoverSection from "./sections/DiscoverSection";
import CategoriesSection from "./sections/CategoriesSection";
import GrowthSection from "./sections/GrowthSection";
import InstructorSection from "./sections/InstructorSection";
import CTASection from "./sections/CTASection";
import TestimonialsSection from "./sections/TestimonialsSection";

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
        </div>
    );
}
