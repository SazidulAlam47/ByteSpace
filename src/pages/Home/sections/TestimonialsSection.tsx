import React from 'react';
import { avatar_2_b44979e1, avatar_3_3fe55918, avatar_4_0577f0e9 } from "../../../assets";
import TestimonialCard from "../../../components/TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      avatar: avatar_2_b44979e1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      content: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.'
    },
    {
      avatar: avatar_3_3fe55918,
      name: 'James L.',
      role: 'Lifelong Learner',
      content: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
    },
    {
      avatar: avatar_4_0577f0e9,
      name: 'Alex B.',
      role: 'Inspired Creator',
      content: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
    }
  ];

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

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
