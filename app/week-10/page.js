// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import React from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main>
      {user && (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <div>
            <ul>
              <li className="flex no-underline hover:underline">
                <Link href="/week-9/shopping-list">
                  <a>Go To Shopping List</a>
                </Link>
              </li>

              <li className="flex no-underline hover:underline">
                <Link href="/week-9/profile-page">
                  <a>Go To Profile Page</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {user ? (
        <div className="flex no-underline hover:underline text-black">
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className="flex no-underline hover:underline text-black">
          <button onClick={login}>Login with GitHub</button>
        </div>
      )}
    </main>
  );
}

/**
 * "use client"

import Link from 'next/link';
import React from 'react';
import { useUserAuth } from './_utils/auth-context';
export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth()

    return (
        <main className='p-5'>
            {
                !user ? <>

                    <button onClick={gitHubSignIn}>Sign in to view options</button>

                </>
                    : <>
                        <Link className='block mb-10' href={"/week-10/shopping-list"}>Go to shopping list</Link>
                        <button onClick={firebaseSignOut}>Sign Out</button>
                    </>
            }
        </main>
    )
}
 */
