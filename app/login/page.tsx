"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store auth token in cookie
        document.cookie = `auth-token=${data.token}; path=/; max-age=86400; SameSite=Strict`;
        router.push("/");
        router.refresh();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="logo">
            <div className="logo-line"></div>
            <div className="logo-line"></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-400 mb-3">
            MONOLITH
          </h1>
          <p className="text-slate-400 text-sm">
            Institutional Yield Infrastructure
          </p>
          <div className="w-32 h-0.5 bg-blue-400/30 my-6 mx-auto"></div>
          <p className="text-slate-300">Please sign in to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 border-2 border-[#e2e8f0]/20 rounded-xl p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/40 border-2 border-[#e2e8f0]/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition text-white placeholder-slate-500"
                placeholder="Enter username"
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/40 border-2 border-[#e2e8f0]/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition text-white placeholder-slate-500"
                placeholder="Enter password"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border-2 border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-400 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-slate-600 text-center mt-8 text-xs">
          Seed Round • December 2025
        </p>
      </div>
    </div>
  );
}
