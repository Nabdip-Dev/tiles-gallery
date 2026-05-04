import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const TileCard = ({ tile }) => {
  return (
    <div className="w-[350px] lg:w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group border border-gray-100">

      {/* Image */}
      <div className="relative p-4 flex justify-center items-center">
        <img
          src={tile.image}
          className="w-full md:w-[200px] h-full md:h-[190px] object-cover group-hover:scale-105 transition duration-300 rounded-4xl"
          alt={tile.title}
        />

        <span
          className={`absolute top-2 right-2 flex items-center gap-1 text-[11px] px-2 py-1 rounded-full text-white
  ${tile.inStock ? "bg-white border border-green-500" : "bg-red-500"}`}
        >
          {tile.inStock ? (
            <div className="flex text-green-600">
              In Stock
              <div className="w-[20px] h-[20px]">
                <DotLottieReact
                  style={{
                    transform: "translateY(-4px)",
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://lottie.host/9bf46ed0-9a1a-4781-83b3-c12b387f50e4/z9xb27O3xi.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          ) : (
            "Out"
          )}
        </span>
      </div>
      <div className="divider my-1 before:h-[1px] after:h-[1px] opacity-90" />
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
            <button className="px-3 py-1 text-sm rounded-lg bg-[#331300b6] text-white hover:bg-[#fb5c00] hover:text-black transition cursor-pointer">
              Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TileCard;