import CourseCard from "../../../components/CourseCard";
import { COURSES } from '../../../constants/home.constant';

const DiscoverSection = () => {

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="text-[#0E1116] font-bold mb-4"
            style={{
              fontSize: '56px',
              lineHeight: '1.1',
              fontFamily: '"Clash Display", sans-serif',
            }}
          >
            Discover Top Courses<br />and Advance Your Skills
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
          >
            Embark on a journey of continuous learning with our extensive library of top-rated courses. Enhance your expertise, broaden your horizons, and stay ahead in today's competitive landscape.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-gray-200 pb-4">
          <div className="flex gap-8 overflow-x-auto pb-2 -mb-[18px]">
            {['All', 'Design', 'Development', 'IT & Business'].map((tab, idx) => (
              <button
                key={idx}
                className={`pb-4 font-medium whitespace-nowrap ${idx === 0 ? 'text-[#0043FF] border-b-2 border-[#0043FF]' : 'text-gray-500 hover:text-black'}`}
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {COURSES.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>

        <div className="text-center">
          <button
            className="px-8 py-4 border-2 border-[#0E1116] text-[#0E1116] font-bold rounded-full hover:bg-[#0E1116] hover:text-white transition-all"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscoverSection;
