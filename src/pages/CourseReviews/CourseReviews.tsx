import { Link } from 'react-router';
import { avatar_2_b44979e1, avatar_3_3fe55918, avatar_4_0577f0e9, avatar_5_d0cd3adb, frame_542 } from '../../assets';

const CourseReviews = () => {
  return (
    <div className="min-h-screen bg-white">
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

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
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

              <div className="flex gap-2 mb-8 border-b border-gray-200">
                <Link
                  to="/course/details"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  About
                </Link>
                <Link
                  to="/course/lessons"
                  className="px-6 py-3 text-gray-600 hover:text-black font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Lesson
                </Link>
                <button
                  className="px-6 py-3 bg-[#CBFC01] text-black font-medium rounded-t-xl"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Reviews
                </button>
              </div>

              <div className="mb-12">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  What Learners Are Saying
                </h2>
                <p
                  className="text-gray-600 mb-8"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Discover what our learners have to say about their experience with "Build Digital Assets: A
                  Comprehensive Guide." Read honest reviews and ratings from individuals who have embarked on the
                  transformative journey of mastering digital asset creation.
                </p>

                <div className="flex gap-8 items-start mb-12">
                  <div className="bg-[#CBFC01] rounded-3xl p-8 text-center">
                    <div
                      className="text-5xl font-bold mb-2"
                      style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                      4.7
                    </div>
                    <p className="text-sm font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Average Rating
                    </p>
                  </div>

                  <div className="flex-1">
                    {[
                      { stars: 5, count: 720, percentage: 85 },
                      { stars: 4, count: 90, percentage: 10 },
                      { stars: 3, count: 21, percentage: 3 },
                      { stars: 2, count: 15, percentage: 1.5 },
                      { stars: 1, count: 6, percentage: 0.5 },
                    ].map((rating, index) => (
                      <div key={index} className="flex items-center gap-4 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < rating.stars ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#CBFC01] rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                          {rating.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Individual Reviews:
                </h3>

                <div className="flex gap-2 mb-8 flex-wrap">
                  <button
                    className="px-6 py-2 bg-[#CBFC01] text-black font-medium rounded-full"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    All rating
                  </button>
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <button
                      key={stars}
                      className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      ★ {stars}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: 'PurePearl Studio',
                      role: 'UI/UX Designer',
                      avatar: avatar_2_b44979e1,
                      rating: 5,
                      time: 'a year ago',
                      review: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
                    },
                    {
                      name: 'Albert Flores',
                      role: 'UI/UX Designer',
                      avatar: avatar_3_3fe55918,
                      rating: 5,
                      time: 'a year ago',
                      review: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
                    },
                    {
                      name: 'Cody Fisher',
                      role: 'UI/UX Designer',
                      avatar: avatar_4_0577f0e9,
                      rating: 5,
                      time: 'a year ago',
                      review: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
                    },
                    {
                      name: 'Brooklyn Simmons',
                      role: 'UI/UX Designer',
                      avatar: avatar_5_d0cd3adb,
                      rating: 5,
                      time: 'a year ago',
                      review: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
                    },
                  ].map((review, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4
                              className="font-bold"
                              style={{ fontFamily: '"Satoshi", sans-serif' }}
                            >
                              {review.name}
                            </h4>
                            <span
                              className="text-sm text-gray-500"
                              style={{ fontFamily: '"Satoshi", sans-serif' }}
                            >
                              {review.time}
                            </span>
                          </div>
                          <p
                            className="text-sm text-gray-600 mb-2"
                            style={{ fontFamily: '"Satoshi", sans-serif' }}
                          >
                            {review.role}
                          </p>
                          <div className="flex gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-lg">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-gray-700 leading-relaxed"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {review.review}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                    className="text-4xl font-bold text-[#0043FF] mb-4"
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

export default CourseReviews;
