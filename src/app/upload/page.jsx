"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    releaseDate: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const session = localStorage.getItem("musicSession");
    if (!session) {
      router.push("/login");
      return;
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch("/api/tracks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          title: "",
          artist: "",
          releaseDate: "",
          genre: "",
        });
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to upload track");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("musicSession");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                
                Upload New Track
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Track Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter track title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="artist"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Artist Name *
                  </label>
                  <input
                    type="text"
                    name="artist"
                    id="artist"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.artist}
                    onChange={handleChange}
                    placeholder="Enter artist name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="releaseDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Release Date *
                  </label>
                  <input
                    type="date"
                    name="releaseDate"
                    id="releaseDate"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.releaseDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="genre"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Genre *
                  </label>
                  <select
                    name="genre"
                    id="genre"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.genre}
                    onChange={handleChange}
                  >
                    <option value=""> Select a genre </option>
                    <option value="Pop"> Pop </option>
                    <option value="Rock"> Rock </option>
                    <option value="Electronic"> Electronic </option>
                    <option value="Hip-Hop"> Hip - Hop </option>
                    <option value="Jazz"> Jazz </option>
                    <option value="Classical"> Classical </option>
                    <option value="Country"> Country </option>
                    <option value="R&B"> R & B </option>
                    <option value="Alternative"> Alternative </option>
                    <option value="Other"> Other </option>
                  </select>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                    
                    {error}
                  </div>
                )}
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
                    Track uploaded successfully!Redirecting to dashboard...
                  </div>
                )}
                <div className="flex justify-end space-x-3">
                  <Link
                    href="/dashboard"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    {loading ? "Uploading..." : "Upload Track"}
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
