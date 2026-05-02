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
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <div>
          <h1 className="text-xl font-bold text-[#331300b6]">
            {search.trim()
              ? `Search Results: ${filteredTiles.length}`
              : `Total Tiles: ${tiles.length}`}
          </h1>
        </div>

        <div className="flex items-center w-[320px] md:w-[420px] bg-gray-100 rounded-full shadow-md overflow-hidden">

          <input
            type="text"
            placeholder="Search tiles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-2 bg-transparent outline-none text-sm text-[#331300b6]"
          />

          <div className="w-9 h-9 flex items-center justify-center bg-[#331300b6] text-white rounded-full m-1">
            🔍
          </div>

        </div>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

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