"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getTileById } from "@/services/api";
import { motion } from "framer-motion";

import { FaHeart, FaShoppingCart, FaLayerGroup, FaTag } from "react-icons/fa";

function Skeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="animate-pulse grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="h-[420px] bg-gray-200 rounded-2xl"></div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-28 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function TileDetails() {
  const { id } = useParams();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    if (id) getTileById(id).then(setTile);
  }, [id]);

  if (!tile) return <Skeleton />;

  return (
    <div className="min-h-screen flex items-center  px-4 py-16 lg:py-2">

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
      >

        {/* LEFT IMAGE */}
        <div className="h-[430px] w-full bg-[#ffffff] rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="h-[430px] bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-white/40 p-5 flex flex-col justify-between">

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {tile.title}
            </h1>

            <p className="mt-2 text-gray-600 text-sm">
              {tile.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">

              <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg">
                <FaLayerGroup className="text-orange-500" />
                <div>
                  <p className="text-gray-500 text-[10px]">Category</p>
                  <p className="font-semibold">{tile.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg">
                <FaTag className="text-orange-500" />
                <div>
                  <p className="text-gray-500 text-[10px]">Price</p>
                  <p className="font-semibold">${tile.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg">
                <span>📐</span>
                <div>
                  <p className="text-gray-500 text-[10px]">Size</p>
                  <p className="font-semibold">{tile.dimensions}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg">
                <span>🧱</span>
                <div>
                  <p className="text-gray-500 text-[10px]">Material</p>
                  <p className="font-semibold">{tile.material}</p>
                </div>
              </div>

            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className={`h-2.5 w-2.5 rounded-full ${tile.inStock ? "bg-green-500" : "bg-red-500"}`}></span>
              <p className={`font-semibold ${tile.inStock ? "text-green-600" : "text-red-500"}`}>
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2 mt-3">

            <button
              disabled={!tile.inStock}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition
              ${tile.inStock
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              <FaShoppingCart />
              Add
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm hover:border-orange-500 hover:text-orange-500 transition">
              <FaHeart />
              Save
            </button>

          </div>

        </div>
      </motion.div>
    </div>
  );
}