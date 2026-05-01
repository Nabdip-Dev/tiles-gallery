"use client";
import { useEffect, useState } from "react";
import { getTiles } from "@/services/api";
import Loader from "@/components/loader/Loader";
import TileCard from "@/components/share/ui/TileCard";
import Link from "next/link";

export default function Home() {
  const [allTiles, setAllTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getTiles()
      .then(data => setAllTiles(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  // filter logic
  const visibleTiles = search.trim()
    ? allTiles.filter(tile =>
      tile.title.toLowerCase().includes(search.toLowerCase())
    )
    : allTiles.slice(0, 8);

  const totalCount = search.trim()
    ? visibleTiles.length
    : allTiles.length;

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

      {/* SEARCH + COUNT */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 mt-9 gap-4">

        {/* left side count */}
        <div>
          <h1 className="text-xl font-bold text-[#331300b6]">
            {search.trim()
              ? `Search Results: ${visibleTiles.length}`
              : `Total Tiles: ${allTiles.length}`}
          </h1>
        </div>

        {/* right search */}
        <div className="flex items-center w-[320px] md:w-[360px] bg-gray-100 rounded-full shadow-md overflow-hidden">

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-2 bg-transparent outline-none text-sm text-[#331300b6]"
          />

          <div className="w-9 h-9 flex items-center justify-center bg-[#331300b6] text-white rounded-full m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

        </div>

      </div>

      {/* GRID */}
      <div className="mx-auto mt-8 px-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {visibleTiles.length > 0 ? (
          visibleTiles.map(tile => (
            <TileCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-10">
            No tiles found
          </p>
        )}

      </div>

      {/* SHOW MORE BUTTON (HIDE WHEN SEARCH) */}
      {!search.trim() && (
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
      )}

    </div>
  );
}