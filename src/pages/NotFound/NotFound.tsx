import React from 'react';
import { Link } from 'react-router';
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0043FF]">
      <Header />

      {/* 404 Section */}
      <section className="relative bg-[#0043FF] flex-1 flex items-center justify-center overflow-hidden">
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

      <Footer />
    </div>
  );
}
