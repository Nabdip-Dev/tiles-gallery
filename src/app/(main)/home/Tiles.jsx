"use client";
import { useEffect, useState } from "react";
import { getTiles } from "@/services/api";
import Loader from "@/components/loader/Loader";
import TileCard from "@/components/share/ui/TileCard";
import Link from "next/link";

export default function Home() {
  const [allTiles, setAllTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTiles()
      .then(data => setAllTiles(data))
      .finally(() => setLoading(false));
  }, []);


  const visibleTiles = allTiles.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto flex flex-col my-15">

      {/* Heading */}
      <div className="flex flex-col mx-auto justify-center items-center text-center">

        <h1 className="text-2xl md:text-4xl font-bold text-[#ff5e00]">
          Exclusive Collection of{" "}
          <span className="text-[#331300b6]">Premium Quality Tiles</span>
        </h1>

        <p className="mt-6 text-lg text-[#443939d8]">
          Discover a curated collection of premium and exclusive tiles designed to bring elegance, <br />
          strength, and style to your spaces.
        </p>

      </div>

      {/* COUNT */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 mt-9 gap-4">

        <div>
          <h1 className="text-xl font-bold text-[#331300b6] ">
            Featured Tiles:
          </h1>
          <h4 className="font-semibold text-[#ff5e00d8]">
            Total Tiles: {allTiles.length}
          </h4>
        </div>

      </div>

      {/* GRID */}
      <div className="mx-auto mt-8 px-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {loading ? (
          <div className="col-span-full flex items-center justify-center py-16">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        ) : visibleTiles.length > 0 ? (
          visibleTiles.map(tile => (
            <TileCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-10">
            No tiles found
          </p>
        )}

      </div>

      {/* SHOW MORE BUTTON */}
      <div className="flex w-full p-6">

        <Link href="/all-tiles" className="inline-block ml-auto group">
          <button className="relative mt-1 px-5 py-2 text-sm font-semibold text-white
            bg-gradient-to-r from-[#fb5c00] to-[#ff7a1a]
            shadow-lg overflow-hidden rounded-xl
            transition-all duration-300
            hover:shadow-2xl hover:-translate-y-0.5
            active:scale-95
            [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)]">

            <span className="relative z-10 flex items-center gap-2">
              Show More →
            </span>

          </button>
        </Link>

      </div>

    </div>
  );
}