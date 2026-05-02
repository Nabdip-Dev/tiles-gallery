"use client";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = ({ user, handleLogout }) => {
  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-[#ff5e00]">
          TILE<span className="text-[#2c1b3b]">S</span>HOP
        </Link>
      </div>

      {/* Center - Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
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
          <div className="flex w-[160px] h-[35px]">

            {/* Login */}
            <Link href="/login" className="w-1/2">
              <button
                className="w-full h-full pr-2 text-xs font-semibold text-[#ff5e00] hover:text-white
      border-2 border-[#ff5e00] hover:border-none hover:bg-gradient-to-l from-[#331300b6] to-[#9f3b01b6]
      rounded-tl-3xl
      cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.05]
      [clip-path:polygon(0_0,100%_0,75%_100%,0_100%)]"
              >
                Login
              </button>
            </Link>

            {/* Register */}
            <Link href="/register" className="w-1/2 -ml-[20px]">
              <button
                className="w-full h-full pl-2 text-xs font-semibold text-[#331300b6] hover:text-white
      border-2 border-[#331300b6] hover:border-none hover:bg-gradient-to-r from-[#ff5100] to-[#e05200]
      rounded-br-3xl
      cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.05]
      [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]"
              >
                Register
              </button>
            </Link>

          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden ml-2">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
          {user && <li><Link href="/my-profile">My Profile</NavLink></li>}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;