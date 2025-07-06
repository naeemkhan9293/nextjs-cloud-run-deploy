"use client";

export default function Home() {
  console.log("Environmental variable:", process.env.NEXT_PUBLIC_MY_ENV_VAR);
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] p-0"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-30 rounded-full blur-3xl animate-blob1 z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-yellow-400 via-pink-400 to-red-500 opacity-30 rounded-full blur-3xl animate-blob2 z-0" />
      <main className="relative z-10 flex flex-col items-center justify-center gap-8 w-full px-4">
        {/* Custom content starts here */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-move text-center drop-shadow-lg">
          Welcome
        </h1>
        <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 animate-gradient-move text-center">
          Test Deployment
        </p>
        <p className="mt-6 text-lg sm:text-xl text-white/80 text-center max-w-2xl animate-fadein-slow">
          🚀 Deploy, test, and shine!
          <br />
          Experience a modern, beautiful, and animated homepage.
        </p>
        {process.env.NEXT_PUBLIC_MY_ENV_VAR}
      </main>
      {/* Footer removed as requested */}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease-in-out infinite;
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-fadein-slow {
          animation: fadein 2.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes blob1 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          33% {
            transform: scale(1.1) translate(30px, -20px);
          }
          66% {
            transform: scale(0.95) translate(-20px, 30px);
          }
        }
        .animate-blob1 {
          animation: blob1 12s ease-in-out infinite;
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          33% {
            transform: scale(1.08) translate(-30px, 20px);
          }
          66% {
            transform: scale(0.92) translate(20px, -30px);
          }
        }
        .animate-blob2 {
          animation: blob2 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
