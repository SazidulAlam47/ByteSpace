import React from 'react';

export interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  level: string;
  rating: number;
  price: number;
}

export interface CategoryCardProps {
  icon: string | React.ReactNode;
  title: string;
}

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  content: string;
}
