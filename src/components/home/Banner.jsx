"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="">

      <div
        className="relative flex mx-auto items-center justify-center h-[350px] md:h-[500px] px-6 py-10 text-center bg-cover bg-center bg-no-repeat
 
  "
        style={{ backgroundImage: "url('/banner.png')" }}
      >

        <div>
          <h1 className=" z-50 text-3xl md:text-6xl font-bold text-[#e75500] leading-tight">
            Discover Your Perfect Aesthetic
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Explore our premium collection of modern tiles to transform your
            space into something truly beautiful and unique.
          </p>

          <Link href="/all-tiles">
            <button className="relative mt-4 px-6 py-3 rounded-full font-semibold text-[#ffede3]
bg-[#b84908] overflow-hidden group
active:translate-y-[3px] transition-all duration-200">

              {/* rotating border */}
              <span className="absolute inset-0 rounded-full p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="absolute inset-0 rounded-full
    bg-[conic-gradient(#ffede3,transparent,#ffede3)]
    animate-[spin_3.5s_linear_infinite]">
                </span>
              </span>

              {/* inner background */}
              <span className="absolute inset-[2px] rounded-full bg-[#b84908]"></span>

              {/* text */}
              <span className="relative z-10">
                Browse Now
              </span>

            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Banner;