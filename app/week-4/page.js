"use client";

import React, { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="container mx-auto p-4 justify-center items-center">
      <h1 class="text=3xl font-bold mb-4 text-center">New Item</h1>
      <NewItem />
    </main>
  );
}
