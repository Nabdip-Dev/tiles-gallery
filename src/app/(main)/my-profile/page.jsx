"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getGravatar } from "@/lib/gravatar";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [imgSrc, setImgSrc] = useState("/avatar.png");

  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login first");
    }
  }, [isPending, user]);

  useEffect(() => {
    if (user) {
      setImgSrc(user.image || getGravatar(user.email));
    }
  }, [user]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Toaster position="top-right" />
        <p className="text-red-500 font-semibold">Unauthorized</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Toaster position="top-right" />

      <div className="w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 shadow-xl">

        <div className="bg-white rounded-3xl p-8 text-center">

          {/* Avatar (SAFE FIX - NO NEXT IMAGE ERROR) */}
          <div className="w-28 h-28 mx-auto mb-5">
            <img
              src={imgSrc}
              alt="user"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
              onError={() => {
                setImgSrc("/avatar.png");
                toast.error("Image failed, fallback used");
              }}
            />
          </div>

          {/* Info */}
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-500 text-sm mb-1">
            {user.email}
          </p>

          {user.emailVerified && (
            <p className="text-green-500 text-xs mb-6">
              Email Verified ✓
            </p>
          )}

          {/* Extra Info */}
          <div className="bg-gray-100 rounded-xl p-4 text-left mb-6 space-y-2 text-sm">
            <p><span className="font-medium">User ID:</span> {user.id}</p>
            <p><span className="font-medium">Role:</span> {user.role || "User"}</p>
            <p>
              <span className="font-medium">Joined:</span>{" "}
              {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Link href="/my-profile/update-profile">
              <button className="w-full py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600 hover:scale-[1.02] transition">
                Update Profile
              </button>
            </Link>

            <button
              onClick={() => toast.success("Coming soon")}
              className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Account Settings
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}