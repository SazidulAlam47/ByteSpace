import React from 'react';
import { Link } from 'react-router';
import { bytespace_logo } from "../assets";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Newsletter */}
            <div className="md:col-span-2">
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
                  className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-full text-sm"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                />
                <button
                  className="px-6 py-2 bg-[#CBFC01] text-black font-medium rounded-full hover:bg-[#b8e301] transition-colors shrink-0"
                  style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '14px' }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Featured Courses */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Featured Courses
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    IT
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Development
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-600 hover:text-black">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Become a Creator */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Become a Creator
              </h3>
              <ul className="space-y-2 text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <li>
                  <Link to="/creators" className="text-gray-600 hover:text-black">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-600 hover:text-black">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p style={{ fontFamily: '"Satoshi", sans-serif' }}>© 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-black" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
