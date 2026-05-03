"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { getGravatar } from "@/lib/gravatar";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineOpenInBrowser, MdWavingHand } from "react-icons/md";
import { CgProfile } from "react-icons/cg";




const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, 'user')
  console.log(user?.image)
  const pathname = usePathname();
  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown dropdown-start md:hidden -ml-4 relative">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>

          <ul className="menu dropdown-content  mt-3 p-2 shadow bg-white rounded-box w-40 z-50">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
            {user && <li><NavLink href="/my-profile">My Profile</NavLink></li>}
          </ul>
        </div>

        <Link href="/" className="text-xl font-bold text-[#ff5e00]">
          TILE<span className="text-[#2c1b3b]">S</span>HOP
        </Link>

      </div>

      {/* Center - Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-medium">
          <li><NavLink href="/"><RiHome4Line />Home</NavLink></li>
          <li><NavLink href="/all-tiles"><MdOutlineOpenInBrowser />All Tiles</NavLink></li>
          {user && <li><NavLink href="/my-profile"> <CgProfile />My Profile</NavLink></li>}
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-bars loading-sm text-orange-500"></span>
        ) : user ? (
          <>
            <div className="px-4">
              <h1 className="hidden md:flex flex-col  items-center gap-1">
                <span className="flex items-center text-[#300f00] font-semibold">Hello<MdWavingHand /></span> <span className="font-bold text-[#ff5e00]">“{user.name}”</span>
              </h1>
            </div>

            <img
              src={user?.image || getGravatar(user?.email)}
              onError={(e) => {
                e.currentTarget.src = "https://i.ibb.co/4pDNDk1/avatar.png";
              }}
              alt="user"
              className="z-10 w-8 h-8 rounded-full -mr-11 object-cover"
            />


            <button
              onClick={async () => await authClient.signOut()}
              className="flex items-center gap-1 font-semibold relative pl-13 pr-4 py-1 text-[#331300b6] hover:text-white text-lg border-1 border-[#331300b6] hover:border-transparent hover:bg-gradient-to-r from-[#fb5c00] to-[#ff7a1a] rounded-full overflow-hidden
             before:content-[''] before:absolute before:top-1/2 before:left-0
             before:w-11 before:h-11 before:bg-white
             before:rounded-full before:-translate-x-1/12 before:-translate-y-1/2 cursor-pointer"
            >

              <IoIosLogOut />logout
            </button>


          </>
        ) : (
          <div className="flex w-[160px] h-[35px]">

            {/* Login */}
            <Link href="/login" className="w-1/2">
              <button
                className={`w-full h-full pr-2 text-xs font-semibold
      border-2 rounded-tl-3xl cursor-pointer transition-all duration-300
      hover:brightness-110 hover:scale-[1.05]
      [clip-path:polygon(0_0,100%_0,75%_100%,0_100%)]
      ${pathname === "/login"
                    ? "text-white border-none bg-gradient-to-l from-[#331300b6] to-[#9f3b01b6]"
                    : "text-[#ff5e00] border-[#ff5e00] hover:text-white hover:border-none hover:bg-gradient-to-l from-[#331300b6] to-[#9f3b01b6]"
                  }`}
              >
                Login
              </button>
            </Link>

            {/* Register */}
            <Link href="/register" className="w-1/2 -ml-[20px]">
              <button
                className={`w-full h-full pl-2 text-xs font-semibold
      border-2 rounded-br-3xl cursor-pointer transition-all duration-300
      hover:brightness-110 hover:scale-[1.05]
      [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
      ${pathname === "/register"
                    ? "text-white border-none bg-gradient-to-r from-[#ff5100] to-[#e05200]"
                    : "text-[#331300b6] border-[#331300b6] hover:text-white hover:border-none hover:bg-gradient-to-r from-[#ff5100] to-[#e05200]"
                  }`}
              >
                Register
              </button>
            </Link>

          </div>
        )}
      </div>

    </div >

  );
};

export default Navbar;