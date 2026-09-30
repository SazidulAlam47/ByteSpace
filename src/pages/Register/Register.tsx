import { Link } from "react-router";
import { bytespace_logo, frame_209, frame_235, cone_01_1, cone_01_2 } from "../../assets";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0043FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px), repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255,255,255,0.1) 99px, rgba(255,255,255,0.1) 100px)',
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      <img src={cone_01_1} alt="" className="absolute top-[10%] right-[60%] w-[120px] opacity-80 z-0 pointer-events-none" />
      <img src={cone_01_2} alt="" className="absolute bottom-[20%] left-[5%] w-[100px] opacity-80 z-0 pointer-events-none" />

      <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-2">
        <img src={bytespace_logo} alt="ByteSpace" className="w-[29px] h-[32px]" />
        <span
          className="text-white font-bold tracking-wide"
          style={{ fontSize: '24px', lineHeight: '30px', fontFamily: '"Clash Display", sans-serif' }}
        >
          ByteSpace
        </span>
      </Link>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div className="w-full max-w-6xl flex items-center gap-16">
          <div className="flex-1 hidden lg:block">
            <h2 className="text-white font-bold mb-4 max-w-md"
                style={{ fontSize: '36px', lineHeight: '1.2', fontFamily: '"Clash Display", sans-serif' }}>
              Sign up and come in
            </h2>
            <p className="text-white/80 mb-12 max-w-md"
               style={{ fontSize: '16px', lineHeight: '1.6', fontFamily: '"Satoshi", sans-serif' }}>
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>

            <div className="relative">
              <div className="space-y-6">
                <img src={frame_209} alt="Course Preview" className="w-[300px] rounded-2xl shadow-xl transform -rotate-6 z-10 relative" />
                <img src={frame_235} alt="Course Preview" className="w-[300px] rounded-2xl shadow-xl transform rotate-3 ml-12 z-0 relative -mt-16" />
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <p className="text-[#0043FF] text-sm font-medium mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Create an Account
                </p>
                <h1 className="text-[#0E1116] font-bold"
                    style={{ fontSize: '48px', lineHeight: '1.1', fontFamily: '"Clash Display", sans-serif' }}>
                  Welcome to ByteSpace
                </h1>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jamie Davis"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0043FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="designer@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0043FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"
                         style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0043FF] focus:border-transparent"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#CBFC01] text-[#0E1116] font-bold rounded-full hover:bg-[#b8e301] transition-all transform hover:scale-[1.02]"
                  style={{ fontSize: '16px', fontFamily: '"Satoshi", sans-serif' }}
                >
                  Continue
                </button>

                <p className="text-center text-sm text-gray-600" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#0043FF] font-medium hover:underline">
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
