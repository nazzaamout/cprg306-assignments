"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main>
        <div className="flex no-underline hover:underline text-black">
          <p>Sign in to your GitHub account</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col h-screen w-screen bg-center bg-cover">
      <h1 className="p-5 text-7xl text-transparent font-bold font-sans bg-clip-text justify-center items-center flex">
        User Profile
      </h1>

      <div className="flex flex-col justify-center items-center">
        <p>
          Welcome, {user.displayName} ({user.email})
        </p>

        <img
          src={user.photoURL}
          alt="User profile"
          className="rounded-full w-32 h-32"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <button>
          <Link
            href="/week-9/shopping-list"
            className="flex no-underline hover:underline text-slate-800 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-700"
          >
            Back to Shopping List
          </Link>
        </button>

        <button>
          <Link
            href="/week-9"
            className="flex no-underline hover:underline text-slate-800 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-700"
          >
            Back to Main Page
          </Link>
        </button>
      </div>
    </main>
  );
}
