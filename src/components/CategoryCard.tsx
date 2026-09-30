import React from 'react';

export interface CategoryCardProps {
  icon: string | React.ReactNode;
  title: string;
}

export default function CategoryCard({ icon, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
      <div className="w-16 h-16 bg-[#CBFC01] rounded-2xl flex items-center justify-center mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="font-bold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        {title}
      </h3>
    </div>
  );
}
