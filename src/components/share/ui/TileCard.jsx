import Link from "next/link";

const TileCard = ({ tile }) => {
  return (
    <div className="w-[360px] lg:w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group border border-gray-100">

      {/* Image */}
      <div className="relative">
        <img
          src={tile.image}
          className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-300"
          alt={tile.title}
        />

        <span className={`absolute top-2 right-2 text-[11px] px-2 py-1 rounded-full text-white
      ${tile.inStock ? "bg-green-500" : "bg-red-500"}`}>
          {tile.inStock ? "In Stock" : "Out"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">

        <h2 className="font-semibold text-gray-800 truncate">
          {tile.title}
        </h2>

        <p className="text-xs text-gray-500">
          {tile.category} • {tile.material}
        </p>

        <p className="text-sm text-gray-600">
          {tile.dimensions}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-[#fb5c00] font-bold">
            ${tile.price}
          </span>

          <Link href={`/tiles/${tile.id}`}>
            <button className="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
              Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TileCard;