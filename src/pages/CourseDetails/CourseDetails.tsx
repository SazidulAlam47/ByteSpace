import { Link } from "react-router";
import Header from "../../shared/Header";
import { avatar_2_b44979e1, image_33_29a52a24 } from "../../assets";

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Course Hero Section */}
      <section className="bg-[#0E52FF] pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-3xl">
            <h1
              className="text-white font-bold mb-4"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                fontFamily: '"Clash Display", sans-serif',
              }}
            >
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p
              className="text-white/90 mb-6 text-lg"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-white/90" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                by <span className="font-medium text-[#CBFC01]">purepearl studio</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                📊 Intermediate
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                ⭐ 4.8 (172 reviews)
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                👥 199 Students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2">
              {/* Video Preview */}
              <div className="mb-8 rounded-3xl overflow-hidden bg-gray-100 relative aspect-video">
                <img
                  src={image_33_29a52a24}
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0E52FF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-gray-200">
                <button
                  className="px-6 py-3 bg-[#CBFC01] text-black font-medium rounded-t-xl"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  About
                </button>
                <Link
                  to="/course/lessons"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lessons
                </Link>
                <Link
                  to="/course/reviews"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Reviews
                </Link>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  Description
                </h2>
                <div
                  className="text-gray-700 leading-relaxed space-y-4"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  <p>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive
                    course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites
                    you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork
                    with foundational concepts to mastering advanced techniques, this guide is meticulously curated to
                    empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                  </p>
                  <p>
                    In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational
                    concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                    constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                    effectively in the digital realm.
                  </p>
                  <p>
                    As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances
                    of design principles that drive impactful creations. Uncover the secrets behind effective visual
                    communication, exploring color theory, typography, and layout strategies that elevate your digital assets
                    to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
                    these principles in practical scenarios.
                  </p>
                </div>
              </div>

              {/* Sneak Peak */}
              <div className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  Sneak Peak
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      <img
                        src={image_33_29a52a24}
                        alt={`Preview ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  Key Points
                </h2>
                <div className="space-y-3">
                  {[
                    'Foundational Concepts',
                    'Design Principles Mastery',
                    'Advanced Techniques in Digital Creation',
                    'Project Showcase and Critique',
                    'Optimizing for Various Platforms',
                    'Digital Asset Management Best Practices',
                    'Monetization Strategies',
                    'Capstone Project: Building Your Portfolio',
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#0E52FF] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span
                        className="text-gray-800 font-medium"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Course Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-xl sticky top-24">
                <div className="mb-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    112 Lessons (24 hours)
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        01 Introduction to Digital Assets
                      </span>
                      <span className="text-[#0E52FF] font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        12 mins
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        02 Design Principles for Impacts
                      </span>
                      <span className="text-[#0E52FF] font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        21 mins
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        03 Advanced Techniques in Digital Creation
                      </span>
                      <span className="text-[#0E52FF] font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        16 mins
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs pt-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      99 more videos
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>
                </div>

                <div className="mb-6">
                  <div
                    className="text-4xl font-bold text-[#0E52FF] mb-4"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                  >
                    $25<span className="text-lg font-normal text-gray-500">/lifetime</span>
                  </div>
                  <button
                    className="w-full py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all"
                    style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Enroll Now
                  </button>
                </div>

                <div className="mb-6">
                  <h4
                    className="font-bold mb-3"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    This course include
                  </h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { icon: '📚', text: 'Learning Resources' },
                      { icon: '🎥', text: 'Quality Lesson Videos' },
                      { icon: '📜', text: 'Certificate of Completion' },
                      { icon: '💬', text: 'Private Consultation' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <span>{item.icon}</span>
                        <span style={{ fontFamily: '"Satoshi", sans-serif' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={avatar_2_b44979e1}
                      alt="PurePearl Studio"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        PurePearl Studio
                      </h4>
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        Professional Creator
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-sm text-gray-600 mb-3"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>
                  <Link
                    to="/creator/purepearl"
                    className="text-sm text-[#0E52FF] font-medium hover:underline"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
