"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const [show, setShow] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-6">

            {/* 🔥 same gradient as login */}
            <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-[#ff5e00] via-purple-500 to-pink-500">

                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

                    <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Join the community
                    </p>

                    {/* Form */}
                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
                        />

                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
                        />

                        <div className="relative">

                            <input
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered w-full rounded-xl pr-10 focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
                            />

                            {/* Emoji Toggle */}
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg select-none"
                            >
                                {show ? "👁️" : "🙈"}
                            </span>

                        </div>

                        {/* 🔥 same button color as login */}
                        <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#ff5e00] to-[#ae4001] hover:scale-105 transition duration-300 shadow-md">
                            Register
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="divider my-6 text-gray-400">OR</div>

                    {/* Social */}
                    <div className="space-y-3">

                        <button className="btn w-full flex items-center gap-3 border rounded-xl hover:bg-gray-100 hover:border-[#ff5e00] transition">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                                className="w-5"
                            />
                            Continue with Google
                        </button>

                        <button className="btn w-full flex items-center gap-3 border rounded-xl hover:bg-gray-100 transition hover:border-[#ff5e00]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                className="w-5"
                            />
                            Continue with Facebook
                        </button>

                    </div>

                    {/* Redirect */}
                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
}