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
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img src={tile.image} className="rounded-xl" />

      <div>
        <h1 className="text-3xl font-bold">{tile.title}</h1>
        <p className="mt-4">{tile.description}</p>
        <p className="mt-2">Category: {tile.category}</p>
        <p>Price: ${tile.price}</p>
      </div>
    </div>
  );
}