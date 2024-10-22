import React, { useState } from "react";
import Item from "./item";
import itemsJason from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...itemsJason];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="p-4">
      <div className="flex flex-row gap-4 justify-center text-lg font-sans font-semibold text-white">
        <p>Sort By: </p>

        <button
          onClick={() => {
            setSortBy("name");
          }}
          style={{ backgroundColor: sortBy === "name" ? "blue" : "grey" }}
          className="bg-cyan-500 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Name
        </button>

        <button
          onClick={() => {
            setSortBy("category");
          }}
          style={{ backgroundColor: sortBy === "category" ? "blue" : "grey" }}
          className="bg-cyan-500 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </main>
  );
}
