"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function Register() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelfun = async (data) => {
    const { email, name, photo, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error?.message || "Something went wrong");
        return;
      }

      toast.success("Registration Successful 🎉");

      if (res) {
        await authClient.signOut();
        router.push("/login");
      }
    } catch (err) {
      toast.error("Server error occurred");
    }
  };

  const handelgooglesin = async () => {
    try {
      toast.loading("Redirecting to Google...", { id: "google" });

      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Google login started", { id: "google" });
    } catch (err) {
      toast.error("Google login failed", { id: "google" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      {/* TOASTER */}
      <Toaster position="top-right" />

      <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-[#ff5e00] via-purple-500 to-pink-500">

        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Join the community
          </p>

          <form onSubmit={handleSubmit(handelfun)} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">
                {errors.name.message}
              </p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">
                {errors.email.message}
              </p>
            )}

            {/* PHOTO */}
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photo")}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
            />

            {/* PASSWORD */}
            <div className="relative">

              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full rounded-xl pr-10 focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none"
              >
                {show ? "👁️" : "🙈"}
              </span>

            </div>

            {errors.password && (
              <p className="text-red-600 text-sm">
                {errors.password.message}
              </p>
            )}

            {/* SUBMIT */}
            <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#ff5e00] to-[#ae4001] hover:scale-105 transition duration-300 shadow-md">
              Register
            </button>

          </form>

          {/* OR */}
          <div className="divider my-6 text-gray-400">OR</div>

          {/* GOOGLE */}
          <button
            onClick={handelgooglesin}
            className="btn w-full flex items-center gap-3 border rounded-xl hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              className="w-5"
              alt="google"
            />
            Continue with Google
          </button>

          {/* LOGIN LINK */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}