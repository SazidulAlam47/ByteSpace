import React from 'react';
import TestimonialCard from "../../../components/TestimonialCard";
import { TESTIMONIALS } from "../../../constants/home.constant";

const TestimonialsSection = () => {

  return (
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

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
