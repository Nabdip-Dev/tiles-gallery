import { FaFacebookF, FaInstagram, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 mt-0">

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center">

        {/* Logo & About */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-[#ff5e00]">
            TILE<span className="text-white">S</span>HOP
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-400 max-w-xs">
            Discover premium tiles to elevate your space with modern design,
            durability, and elegance.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#ff5e00] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="hover:text-[#ff5e00] transition">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:text-[#ff5e00] transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <MdEmail className="text-[#ff5e00]" />
              support@tilegallery.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#ff5e00]" />
              +91 98765 43210
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 justify-center">
            <a className="p-2 rounded-full bg-gray-800 hover:bg-[#ff5e00] transition">
              <FaGlobe />
            </a>
            <a className="p-2 rounded-full bg-gray-800 hover:bg-[#1877F2] transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-gray-800 hover:bg-[#E4405F] transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* ================= NEW TERMS / PRIVACY ================= */}
      <div className="flex justify-center gap-6 text-sm text-gray-400 pb-3">
        <Link href="/privacy" className="hover:text-[#ff5e00] transition">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-[#ff5e00] transition">
          Terms & Conditions
        </Link>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-800 py-4 text-sm text-gray-500">
        © 2026{" "}
        <span className="text-[#ff5e00] font-semibold">Tileshop</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;