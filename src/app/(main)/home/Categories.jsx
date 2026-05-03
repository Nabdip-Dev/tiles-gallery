import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Square, Box, Layers, LayoutGrid } from "lucide-react";

export const Categories = () => {
    const data = [
        { name: "Ceramic Tiles", icon: Square, color: "from-sky-100 to-white", accent: "text-sky-500" },
        { name: "Marble Tiles", icon: Box, color: "from-rose-100 to-white", accent: "text-rose-500" },
        { name: "Wooden Tiles", icon: Layers, color: "from-amber-100 to-white", accent: "text-amber-600" },
        { name: "Mosaic Tiles", icon: LayoutGrid, color: "from-emerald-100 to-white", accent: "text-emerald-500" },
    ];

    return (
        <section className="bg-gradient-to-r from-[#fadff688] via-[#F8EDD8] to-[#f1cbec88] pb-20 px-10 sm:px-6 text-center">

            <h2 className="flex flex-col md:flex-row justify-center items-center mb-15 md:mb-2 text-2xl md:text-3xl font-extrabold text-[#5a2100]">

                <div className="w-[200px] h-[200px] flex items-center justify-center shrink-0 md:-mr-10">
                    <DotLottieReact
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                        }}
                        src="https://lottie.host/27d1dfe3-47e3-444d-bc91-82f66ca0e80a/CKmawAOHDF.lottie"
                        loop
                        autoplay
                    />
                </div>

                <span className="leading-none -mt-15 md:-mt-0">
                    Tile Categories
                </span>

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

                {data.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className={`
                group relative overflow-hidden p-6 sm:p-8 md:p-10 rounded-3xl
                bg-gradient-to-br ${item.color}
                border border-white
                shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                
                /* ✅ MOBILE auto animation */
                motion-safe:animate-[float_4s_ease-in-out_infinite]

                /* desktop hover */
                md:hover:-translate-y-5 md:hover:scale-[1.03]

                transition-all duration-500
              `}
                        >
                            {/* glow always slightly visible on mobile */}
                            <div className="absolute inset-0 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition duration-700">
                                <div className="absolute -inset-10 bg-gradient-to-r from-white via-indigo-100/40 to-pink-100/40 blur-3xl"></div>
                            </div>

                            {/* icon */}
                            <div
                                className="
                  relative flex justify-center mb-4 sm:mb-6
                  md:group-hover:rotate-6 md:group-hover:scale-110
                  transition duration-500
                "
                            >
                                <div className="p-4 sm:p-6 rounded-full bg-white/70 shadow-lg backdrop-blur-md">
                                    <Icon size={32} className={`${item.accent}`} />
                                </div>
                            </div>

                            {/* title */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent md:group-hover:from-indigo-500 md:group-hover:to-emerald-500 transition-all duration-500">
                                    {item.name}
                                </span>
                            </h3>

                            {/* subtitle always visible on mobile */}
                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 opacity-80 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                                Premium quality surface finish collection
                            </p>

                            {/* underline always visible on mobile animation subtle */}
                            <div className="mx-auto mt-4 h-[2px] w-20 md:w-0 md:group-hover:w-28 bg-gradient-to-r from-indigo-300 via-pink-300 to-emerald-300 transition-all duration-500 rounded-full"></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};