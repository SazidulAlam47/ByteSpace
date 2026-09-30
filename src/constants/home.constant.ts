import {
    avatar_2_b44979e1,
    avatar_3_3fe55918,
    avatar_4_0577f0e9,
    frame_516,
    frame_542,
    frame_568,
    frame_594,
    frame_620,
    frame_646,
} from "../assets";
import type {
    CourseCardProps,
    CategoryCardProps,
    TestimonialCardProps,
} from "../types/home.type";

export const COURSES: CourseCardProps[] = [
    {
        image: frame_516,
        title: "Learn Figma from Basic",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
    {
        image: frame_542,
        title: "Build Digital Asset",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
    {
        image: frame_568,
        title: "the Power of Big Data",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
    {
        image: frame_594,
        title: "Balancing Productivity and Self-Care",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
    {
        image: frame_620,
        title: "Mastering Money Management",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
    {
        image: frame_646,
        title: "From Idea to Startup Success",
        instructor: "purepearl studio",
        level: "Beginner",
        rating: 4.5,
        price: 25,
    },
];

export const CATEGORIES: CategoryCardProps[] = [
    { icon: "🎨", title: "Design" },
    { icon: "💻", title: "Development" },
    { icon: "💼", title: "IT & Business" },
    { icon: "📈", title: "Business" },
    { icon: "📸", title: "Photography" },
    { icon: "🎵", title: "Music" },
];

export const TESTIMONIALS: TestimonialCardProps[] = [
    {
        avatar: avatar_2_b44979e1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        content:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        avatar: avatar_3_3fe55918,
        name: "James L.",
        role: "Lifelong Learner",
        content:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        avatar: avatar_4_0577f0e9,
        name: "Alex B.",
        role: "Inspired Creator",
        content:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
];
