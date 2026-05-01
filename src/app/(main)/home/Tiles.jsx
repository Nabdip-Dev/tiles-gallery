"use client";
import { useEffect, useState } from "react";
import { getTiles } from "@/services/api";
import Loader from "@/components/loader/Loader";
import TileCard from "@/components/share/ui/TileCard";
import Link from "next/link";

export default function Home() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTiles()
      .then(data => setTiles(data.slice(0, 8)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (

    <div className="max-w-7xl mx-auto flex flex-col my-15">

      <div className="flex flex-col mx-auto justify-center items-center text-center">

        <h1 className="text-2xl md:text-4xl font-bold text-[#ff5e00]">Exclusive Collection of Premium Quality Tiles</h1>

        <p className="text-lg text-gray-200">Discover a curated collection of premium and exclusive tiles designed to bring elegance, <br /> strength, and style to your spaces.</p>

      </div>

      <div className="mx-auto mt-8 px-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {tiles.map(tile => (
          <TileCard key={tile.id} tile={tile} />
        ))}

      </div>

      <div className="flex w-full p-6">

        <Link href="/all-tiles" className="inline-block ml-auto group">
          <button
            className="relative mt-1 px-5 py-2 text-sm font-semibold text-white
    bg-gradient-to-r from-[#fb5c00] to-[#ff7a1a]
    shadow-lg overflow-hidden rounded-xl
    transition-all duration-300
    hover:shadow-2xl hover:-translate-y-0.5
    active:scale-95
    [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)]"
          >

            {/* shine effect */}
            <span className="absolute inset-0 bg-white/10 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />

            <span className="relative z-10 flex items-center gap-2">
              Show More
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </Link>

      </div>
    </div>
  );
}