"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { FaTags, FaTruck, FaGem, FaFire, FaStar, FaGift } from "react-icons/fa";

const Marqueepage = () => {
  const items = [
    {
      id: 1,
      title: "Big Sale",
      desc: "Up to 50% OFF",
      icon: <FaFire className="text-orange-500 text-xl" />,
    },
    {
      id: 2,
      title: "Free Delivery",
      desc: "All over India 🇮🇳",
      icon: <FaTruck className="text-blue-500 text-xl" />,
    },
    {
      id: 3,
      title: "Premium Quality",
      desc: "Top Grade Tiles",
      icon: <FaGem className="text-purple-500 text-xl" />,
    },
    {
      id: 4,
      title: "Best Deals",
      desc: "Limited Time Offer",
      icon: <FaTags className="text-green-500 text-xl" />,
    },
    {
      id: 5,
      title: "Customer Rating",
      desc: "4.8/5 ⭐ Trusted",
      icon: <FaStar className="text-yellow-500 text-xl" />,
    },
    {
      id: 6,
      title: "Festival Offer",
      desc: "Diwali Mega Sale 🎉",
      icon: <FaGift className="text-pink-500 text-xl" />,
    },
  ];

  return (
    <div className="py-4 bg-gradient-to-r from-orange-50 via-white to-green-50 border-y border-gray-100">

      <Marquee pauseOnHover gradient={false} speed={55}>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 mx-4 px-5 py-3
            bg-white rounded-xl shadow-md
            border border-gray-100
            hover:shadow-lg hover:scale-[1.03]
            transition-all duration-300"
          >

            {/* Icon */}
            <div className="p-2 bg-gray-100 rounded-full">
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <h3 className="font-semibold text-gray-800 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </Marquee>

    </div>
  );
};

export default Marqueepage;