"use client";
import { useEffect, useState } from "react";
import { getTiles } from "@/services/api";
import Loader from "@/components/loader/Loader";
import TileCard from "@/components/share/ui/TileCard";

export default function Home() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTiles()
      .then(data => setTiles(data.slice(0, 4)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-4 gap-6">
      {tiles.map(tile => (
        <TileCard key={tile.id} tile={tile} />
      ))}
    </div>
  );
}