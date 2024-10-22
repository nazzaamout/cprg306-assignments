"use client";

import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
