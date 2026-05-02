"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fff3e8] to-[#ffe0cc] text-center px-4">

      {/* Animated 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-[#ff5e00] animate-bounce">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 animate-fade-in">
        Oops! Page not found
      </p>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-2 text-white font-semibold rounded-full 
        bg-gradient-to-r from-[#ff5e00] to-[#ff7a1a] 
        hover:scale-105 transition-all duration-300 shadow-md">
          Go Home
        </button>
      </Link>

      {/* Animated circle */}
      <div className="absolute w-72 h-72 bg-[#ff5e00]/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#ff7a1a]/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
    </div>
  );
}