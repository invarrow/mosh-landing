"use client";
import { useState } from "react";

export default function WaitlistSignupButton() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        className="bg-gray-900 dark:bg-white text-white dark:text-black font-normal px-6 py-2 rounded-full transition-colors text-base focus:outline-none focus:ring-1 focus:ring-gray-300 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-none"
        onClick={() => setShowForm((v) => !v)}
      >
        Sign up for waitlist
      </button>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center gap-2 w-full max-w-xs"
        >
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 focus:border-gray-400 focus:outline-none text-sm"
            disabled={submitted}
          />
          <button
            type="submit"
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-normal px-4 py-2 rounded w-full transition-colors text-sm hover:bg-gray-300 dark:hover:bg-gray-700 shadow-none"
            disabled={submitted}
          >
            {submitted ? "Thank you!" : "Join Waitlist"}
          </button>
        </form>
      )}
    </div>
  );
} 