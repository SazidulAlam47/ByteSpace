import CategoryCard from "../../../components/CategoryCard";
import { CATEGORIES } from "../../../constants/home.constant";

const CategoriesSection = () => {

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
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif', lineHeight: '1.6' }}
          >
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {CATEGORIES.map((cat, idx) => (
            <CategoryCard key={idx} icon={cat.icon} title={cat.title} />
          ))}
        </div>

        <div className="text-center">
          <button
            className="px-8 py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
