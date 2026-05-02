"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getTileById } from "@/services/api";
import Loader from "@/components/loader/Loader";

// ✅ ALL ICONS IMPORTED (FIXED)
import {
  FaHeart,
  FaShoppingCart,
  FaLayerGroup,
  FaTag,
} from "react-icons/fa";

export default function TileDetails() {
  const { id } = useParams();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    if (id) {
      getTileById(id).then(setTile);
    }
  }, [id]);

  if (!tile) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8f3] to-white py-10 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative group w-[300px] md:w-[360px]">

            <div className="absolute inset-0 bg-[#ff5e00]/10 blur-2xl rounded-2xl"></div>

            <img
              src={tile.image}
              alt={tile.title}
              className="relative rounded-2xl shadow-xl w-full object-cover transform group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

        {/* DETAILS */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#331300]">
            {tile.title}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          {/* INFO WITH ICONS */}
          <div className="mt-6 space-y-4 text-sm text-gray-700">

            <div className="flex items-center gap-3">
              <FaLayerGroup className="text-[#ff5e00] text-lg" />
              <span>
                <span className="font-semibold">Category:</span> {tile.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaTag className="text-[#ff5e00] text-lg" />
              <span>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-lg font-bold text-black">
                  ${tile.price}
                </span>
              </span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">

            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff5e00] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#ff5e00] hover:text-[#ff5e00] transition">
              <FaHeart className="text-lg" />
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}