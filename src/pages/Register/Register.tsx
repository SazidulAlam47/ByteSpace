import { Link } from "react-router";
import { bytespace_logo } from "../../assets";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0E52FF] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)',
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-2">
        <img src={bytespace_logo} alt="ByteSpace" className="w-[29px] h-[32px]" />
        <span
          className="text-white font-bold tracking-wide"
          style={{ fontSize: '24px', lineHeight: '30px', fontFamily: '"Clash Display", sans-serif' }}
        >
          ByteSpace
        </span>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div className="w-full max-w-6xl flex items-center gap-16">
          {/* Left Side - Marketing Content */}
          <div className="flex-1 hidden lg:block">
            <h2 className="text-white font-bold mb-4 max-w-md"
                style={{ fontSize: '36px', lineHeight: '1.2', fontFamily: '"Clash Display", sans-serif' }}>
              Sign up and come in
            </h2>
            <p className="text-white/80 mb-12 max-w-md"
               style={{ fontSize: '16px', lineHeight: '1.6', fontFamily: '"Satoshi", sans-serif' }}>
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>

            {/* Course Cards Preview */}
            <div className="relative">
              {/* Decorative course card mockups */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#CBFC01] rounded-lg flex items-center justify-center">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        the Power of Big Data
                      </p>
                      <p className="text-white/60 text-xs" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        by purepearl studio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/80">
                    <span style={{ fontFamily: '"Satoshi", sans-serif' }}>📈 Beginner</span>
                    <span style={{ fontFamily: '"Satoshi", sans-serif' }}>4.5 ⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Register Form */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <p className="text-[#0E52FF] text-sm font-medium mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Create an Account
                </p>
                <h1 className="text-[#0E1116] font-bold"
                    style={{ fontSize: '48px', lineHeight: '1.1', fontFamily: '"Clash Display", sans-serif' }}>
                  Welcome to ByteSpace
                </h1>
              </div>

              <form className="space-y-6">
                {/* Full Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jamie Davis"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E52FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="designer@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E52FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E52FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all transform hover:scale-[1.02]"
                  style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}
                >
                  Continue
                </button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#0E52FF] font-medium hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
