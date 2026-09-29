import { Link } from "react-router";
import { bytespace_logo } from "../../assets";

export default function Login() {
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
              Sign in with ease
            </h2>
            <p className="text-white/80 mb-12 max-w-md"
               style={{ fontSize: '16px', lineHeight: '1.6', fontFamily: '"Satoshi", sans-serif' }}>
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
                        Build Digital Products
                      </p>
                      <p className="text-white/60 text-xs" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        by purepearl studio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/80">
                    <span style={{ fontFamily: '"Satoshi", sans-serif' }}>📈 Beginner</span>
                    <span style={{ fontFamily: '"Satoshi", sans-serif' }}>17 Lessons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <p className="text-[#0E52FF] text-sm font-medium mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Sign In
                </p>
                <h1 className="text-[#0E1116] font-bold"
                    style={{ fontSize: '48px', lineHeight: '1.1', fontFamily: '"Clash Display", sans-serif' }}>
                  Welcome Back
                </h1>
              </div>

              <form className="space-y-6">
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

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all transform hover:scale-[1.02]"
                  style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500" style={{ fontFamily: '"Satoshi", sans-serif' }}>or</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  New user?{" "}
                  <Link to="/register" className="text-[#0E52FF] font-medium hover:underline">
                    Create an account
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
