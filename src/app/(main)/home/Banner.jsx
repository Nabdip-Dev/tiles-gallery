"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Banner = () => {
  const images = ["/banner2.png", "/banner1.png", "/banner3.png"];

  return (
    <div className="relative h-[350px] md:h-[500px]">

      {/* 🔥 Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        className="h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* 🔥 Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6 py-10">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-[#ff5500] leading-tight">
            Discover Your Perfect Aesthetic
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Explore our premium collection of modern tiles to transform your space.
          </p>

          <Link href="/all-tiles">
            <button className="relative mt-4 pl-6 rounded-full font-semibold text-[#ffede3]
bg-[#fb5c00] overflow-hidden group active:translate-y-[3px] transition-all duration-200 cursor-pointer">

              <span className="absolute inset-0 rounded-full p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="absolute inset-0 rounded-full bg-[conic-gradient(#5a2100,transparent,#5a2100)] animate-[spin_3.5s_linear_infinite]" />
              </span>

              <span className="absolute inset-[2px] rounded-full bg-[#f15a03]" />

              <span className="flex items-center relative z-10">
                Browse Now
                <span className="w-[80px] h-[50px] -ml-5 flex items-center justify-center shrink-0">
                  <DotLottieReact
                    style={{ width: "100%", height: "100%", display: "block" }}
                    src="https://lottie.host/b13d78cb-badc-412a-8996-c760981f6217/UnJn7rWygB.lottie"
                    loop
                    autoplay
                  />
                </span>
              </span>

            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Banner;