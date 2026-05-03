"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahim Uddin",
    role: "Interior Architect",
    text: "The tile quality is outstanding and gives a premium finish to every project.",
    rating: 5,
    color: "#0ea5e9",
    rotate: "-6deg",
  },
  {
    name: "Nusrat Jahan",
    role: "Interior Designer",
    text: "Beautiful marble and wooden tile collection. Perfect for modern interiors.",
    rating: 4,
    color: "#f97316",
    rotate: "4deg",
  },
  {
    name: "Imran Hossain",
    role: "Contractor",
    text: "Very reliable supply and excellent finishing quality. Highly recommended.",
    rating: 5,
    color: "#10b981",
    rotate: "-4deg",
  },
];

export const Reviews = () => {
  return (
    <section className="bg-gradient-to-r  via-[#f2d58db2]  pt-19 pb-25 px-4  flex flex-col items-center justify-center">

      <h2 className="flex flex-col items-center mb-15 -mt-9 text-2xl md:text-3xl font-bold text-[#5a2100] text-center">
        
        <span className="w-[100px] h-[120px]">
          <DotLottieReact
            src="https://lottie.host/4c6512d7-75e9-462d-9156-8883fe8f5def/A72F962FFG.lottie"
            loop
            autoplay
          />
        </span>
        <span className="-mt-4">Client Reviews</span> 
      </h2>

      {/* ✅ responsive layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

        {reviews.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}

            /* ✅ responsive width */
            className="relative w-full max-w-[340px] h-[240px] flex items-center justify-center cursor-pointer"
          >

            {/* COLOR LAYER */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: `radial-gradient(circle at top left, ${item.color} 0%, #ffffff 70%)`,
              }}
            />

            {/* GLOW */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute -inset-10 blur-2xl"
                style={{
                  background: `radial-gradient(circle, ${item.color}55, transparent 70%)`,
                }}
              />
            </div>

            <div className="absolute inset-0 bg-white/90 rounded-xl" />

            <p className="absolute top-5 text-sm tracking-widest text-gray-600">
              <span className="italic text-gray-400">Client</span>{" "}
              <span className="font-bold">REVIEW</span>
            </p>

            <div
              className="absolute w-[240px] h-[150px] bg-white rounded-lg opacity-80"
              style={{
                transform: "rotate(-8deg) translate(-20px,10px)",
              }}
            />

            <div
              className="relative w-[250px] h-[160px] bg-white rounded-lg shadow-md p-4"
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-full shadow-md"
                  style={{ background: item.color }}
                />
                <div>
                  <p className="text-xs font-semibold">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.role}</p>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-2 text-yellow-400 text-sm">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <span className="absolute bottom-2 right-3 text-gray-300 text-lg">
                ”
              </span>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};