import { Link } from "react-router";
import { bytespace_logo } from "../../assets";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 h-[120px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-[122px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-[8px]">
            <img src={bytespace_logo} alt="ByteSpace" className="w-[29px] h-[32px]" />
            <span
              className="text-white font-bold tracking-wide"
              style={{ fontSize: '24px', lineHeight: '30px', fontFamily: '"Clash Display", sans-serif' }}
            >
              ByteSpace
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-white" style={{ fontWeight: 500, fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}>
              Home
            </Link>
            <Link to="/courses" className="text-white" style={{ fontWeight: 400, fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}>
              Courses
            </Link>
            <Link to="/creators" className="text-white" style={{ fontWeight: 400, fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}>
              Creators
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/login" className="text-white" style={{ fontWeight: 400, fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}>
              Sign In
            </Link>
            <Link to="/register" className="text-white" style={{ fontWeight: 400, fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}>
              Join Us
            </Link>
          </div>
        </div>
      </header>

      {/* 404 Section */}
      <section className="relative bg-[#0E52FF] min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)',
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-[#CBFC01] font-bold mb-8"
              style={{ fontSize: '200px', lineHeight: '1', fontFamily: '"Clash Display", sans-serif', letterSpacing: '-0.02em' }}>
            404
          </h1>
          <h2 className="text-white font-bold mb-4 max-w-3xl mx-auto"
              style={{ fontSize: '48px', lineHeight: '1.2', fontFamily: '"Clash Display", sans-serif' }}>
            The page you are looking for doesn't exist
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto"
             style={{ fontSize: '18px', lineHeight: '1.6', fontFamily: '"Satoshi", sans-serif' }}>
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full transition-transform hover:scale-105"
            style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Newsletter */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={bytespace_logo} alt="ByteSpace" className="w-[24px] h-[26px]" />
                <span className="font-bold text-xl" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                  ByteSpace
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                />
                <button className="px-6 py-2 bg-[#CBFC01] text-black font-medium rounded-full hover:bg-[#b8e301] transition-colors"
                        style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '14px' }}>
                  Search
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Featured Courses */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>Featured Courses</h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Featured Categories</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Business</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">IT</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Design</Link></li>
              </ul>
            </div>

            {/* Development */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>Development</h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Marketing</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Photography</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Finance</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-black">Sport</Link></li>
              </ul>
            </div>

            {/* Become a Creator */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>Become a Creator</h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li><Link to="/creators" className="text-gray-600 hover:text-black">Affiliate Program</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
                <li><Link to="/help" className="text-gray-600 hover:text-black">Help</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-black">About</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p style={{ fontFamily: '"Satoshi", sans-serif' }}>© 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>Privacy Policy</Link>
              <Link to="/terms" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>Terms of Service</Link>
              <Link to="/cookies" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>Cookies Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
