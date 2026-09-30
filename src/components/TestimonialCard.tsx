import React from 'react';

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ avatar, name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="font-bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {name}
          </h3>
          <p className="text-[#0E52FF] text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {role}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        "{content}"
      </p>
    </div>
  );
}
