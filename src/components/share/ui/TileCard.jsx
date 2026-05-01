import Link from "next/link";

const TileCard = ({ tile }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
      
      <img
        src={tile.image}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="mt-2 font-semibold">{tile.title}</h2>

      <Link href={`/tiles/${tile.id}`}>
        <button className="mt-3 btn btn-sm bg-blue-500 text-white">
          Details
        </button>
      </Link>

    </div>
  );
};

export default TileCard;