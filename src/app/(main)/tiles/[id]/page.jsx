"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getTileById } from "@/services/api";
import Loader from "@/components/loader/Loader";

export default function TileDetails() {
  const { id } = useParams();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    getTileById(id).then(setTile);
  }, [id]);

  if (!tile) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8f3] to-white py-10 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE SECTION */}
        <div className="relative group">

          <div className="absolute inset-0 bg-[#ff5e00]/10 blur-2xl rounded-2xl"></div>

          <img
            src={tile.image}
            className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-105 transition duration-500"
          />

        </div>

        {/* CONTENT SECTION */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">

          <h1 className="text-4xl font-extrabold text-[#331300] leading-tight">
            {tile.title}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          {/* META INFO */}
          <div className="mt-6 space-y-2 text-sm text-gray-700">

            <p>
              <span className="font-semibold text-[#ff5e00]">Category:</span>{" "}
              {tile.category}
            </p>

            <p>
              <span className="font-semibold text-[#ff5e00]">Price:</span>{" "}
              <span className="text-lg font-bold text-black">
                ${tile.price}
              </span>
            </p>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex gap-4">

            <button className="px-6 py-3 rounded-full bg-[#ff5e00] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
              Add to Cart
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 hover:border-[#ff5e00] hover:text-[#ff5e00] transition">
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}