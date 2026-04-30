"use client";
import Link from "next/link";

const Navbar = ({ user, handleLogout }) => {
  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">
      
      {/* Left - Logo */}
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-blue-600">
          TileGallery
        </Link>
      </div>

      {/* Center - Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-tiles">All Tiles</Link></li>
          {user && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <img
              src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="user"
              className="w-9 h-9 rounded-full border"
            />
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden ml-2">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-tiles">All Tiles</Link></li>
          {user && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;