import React from 'react';

import { avatar_2_b44979e1, avatar_3_3fe55918 } from '../assets';

import type { CourseCardProps } from '../types/home.type';

const CourseCard = ({
  image,
  title,
  instructor,
  level,
  rating,
  price,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
        <span className="text-sm font-bold text-gray-700">{rating}</span>
        <span className="text-yellow-500 text-xs">⭐</span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          {title}
        </h3>
        <div className="text-sm mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          <span className="text-gray-500">by </span>
          <span className="text-[#0043FF] font-medium">{instructor}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            📊 {level}
          </span>
          <div className="flex -space-x-2">
            <img src={avatar_2_b44979e1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={avatar_3_3fe55918} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700">
              26+
            </div>
          </div>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold text-[#0043FF]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
            ${price}
          </span>
          <span className="text-sm text-gray-500 pb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
