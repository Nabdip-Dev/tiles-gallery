"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // load user data safely
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  // protect route
  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login first");
      router.push("/login");
    }
  }, [isPending, user, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated successfully");

      setTimeout(() => {
        router.push("/my-profile");
      }, 1000);

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">

      <Toaster position="top-right" />

      <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 shadow-xl">

        <div className="bg-white rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Image */}
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Preview */}
            {image && (
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="preview"
                  className="w-20 h-20 rounded-full object-cover border"
                  onError={(e) => {
                    e.currentTarget.src = "/avatar.png";
                  }}
                />
              </div>
            )}

            {/* Button */}
            <button
              disabled={loading}
              className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600 hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Information"}
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}