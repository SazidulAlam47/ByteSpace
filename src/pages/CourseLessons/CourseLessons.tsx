import { Link } from "react-router";
import Header from "../../shared/Header";
import { avatar_2_b44979e1, frame_542 } from "../../assets";

export default function CourseLessons() {
  return (
    <div className="min-h-screen bg-white">
      {/* Course Hero Section */}
      <section className="bg-[#0043FF] pb-16">
        
        <div className="pt-8 max-w-[1200px] mx-auto px-8">
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
            {/* Left Column - Lessons Content */}
            <div className="lg:col-span-2">
              {/* Video Preview */}
              <div className="mb-8 rounded-3xl overflow-hidden bg-gray-100 relative aspect-video">
                <img
                  src={frame_542}
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
                <Link
                  to="/course/details"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  About
                </Link>
                <button
                  className="px-6 py-3 bg-[#CBFC01] text-black font-medium rounded-t-xl"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lesson
                </button>
                <Link
                  to="/course/reviews"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Reviews
                </Link>
              </div>

              {/* Explore the Modules */}
              <div className="mb-12">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  Explore the Modules
                </h2>
                <p
                  className="text-gray-600 mb-8"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Immerse yourself in the course content as we break down each module into comprehensive lessons,
                  providing practical insights and hands-on experiences.
                </p>
              </div>

              {/* Lesson List */}
              <div className="space-y-4 mb-12">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lesson List
                </h3>

                {[
                  {
                    title: 'Module 1: Introduction to Digital Assets',
                    description: 'Lay the groundwork with "Exploring the Basics," "Understanding Digital Elements," and "Navigating Design Software Tools." Dive into the essentials of digital asset creation.',
                  },
                  {
                    title: 'Module 2: Design Principles for Impact',
                    description: 'Master the principles that drive impactful designs with lessons such as "Color Theory in Digital Design" and "Typography Essentials." Elevate your visual communication skills.',
                  },
                  {
                    title: 'Module 4: User-Centric Design Strategies',
                    description: 'Understand the art of "Creating in Digital Creation" and delve into "User Experience (UX) Essentials." Craft digital assets with a focus on user-centric design.',
                  },
                  {
                    title: 'Module 5: Interactive Media and Engagement',
                    description: 'Engage your audience with "Creating Interactive Presentations" and "Integrating Multimedia Elements." Master the art of creating immersive digital experiences.',
                  },
                  {
                    title: 'Module 6: Project Showcase and Critique',
                    description: 'Perfect your presentation skills with "Effective Presentation Techniques" and embrace collaboration with "Peer Critique and Collaboration." Showcase your work with confidence.',
                  },
                  {
                    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                    description: 'Adapt your digital creations for "Mobile Platforms" and optimize for "Social Media." Ensure optimal accessibility and engagement across diverse digital landscapes.',
                  },
                ].map((lesson, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-[#CBFC01] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-bold mb-2"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {lesson.title}
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lesson Content */}
              <div className="mb-12">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lesson Content
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Engage with each lesson through captivating video content, detailed textual explanations, and
                  interactive elements. Download resources, complete assignments, and test your understanding with
                  quizzes.
                </p>
              </div>

              {/* Lesson Progress Tracking */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lesson Progress Tracking
                </h3>
                <p
                  className="text-gray-600 mb-6"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                  through your learning journey.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className="text-sm font-medium text-gray-600"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Learning Progress
                    </span>
                    <span
                      className="text-2xl font-bold text-[#0043FF]"
                      style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                      55%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#CBFC01] rounded-full" style={{ width: '55%' }}></div>
                  </div>
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
