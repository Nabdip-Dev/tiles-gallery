"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Explore our premium collection of modern tiles to transform your
            space into something truly beautiful and unique.
          </p>

          <Link href="/all-tiles">
            <button className="mt-6 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-200 transition">
              Browse Now
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/0jQn6xK/tiles-banner.png"
            alt="tiles"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;