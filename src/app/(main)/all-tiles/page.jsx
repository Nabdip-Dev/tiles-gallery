"use client";
import { useEffect, useState } from "react";
import { getTiles } from "@/services/api";
import Loader from "@/components/loader/Loader";
import TileCard from "@/components/share/ui/TileCard";

export default function AllTiles() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getTiles()
      .then(data => setTiles(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  // filter
  const filteredTiles = search.trim()
    ? tiles.filter(tile =>
        tile.title.toLowerCase().includes(search.toLowerCase())
      )
    : tiles;

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADING + BIO */}
      <div className="text-center mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-[#ff5e00]">
          All Premium Tiles Collection
        </h1>

        <p className="mt-3 text-[#443939d8] text-sm md:text-base">
          Explore our complete range of exclusive, premium quality tiles designed for modern spaces.
        </p>

      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-8">

        <div className="flex items-center w-[320px] md:w-[420px] bg-gray-100 rounded-full shadow-md overflow-hidden">

          <input
            type="text"
            placeholder="Search tiles..."
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-18">

        {filteredTiles.length > 0 ? (
          filteredTiles.map(tile => (
            <TileCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No tiles found
          </p>
        )}

      </div>

    </div>
  );
}