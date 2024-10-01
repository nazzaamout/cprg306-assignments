"use client";

import React, { useState } from "react";
import Item from "./item";

const items = JSON.parse(require("./items.json"));

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    const groupItems = Object.values(
      items.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
      }, {})
    );
  });

  const sortButtons = [
    { label: "Name", value: "name" },
    { label: "Category", value: "category" },
  ];

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setSortBy(sortButtons[0].value)}
        className={`px-4 py-2 ${
          sortBy == sortButtons[0].value
            ? "bg-blue-500 text-white"
            : "bg-gray-300"
        }`}
      >
        {sortButtons[0].value}
      </button>

      <button
        onClick={() => setSortBy(sortButtons[1].value)}
        className={`px-4 py-2 ${
          sortBy === sortButtons[1].value
            ? "bg-blue-500 text-white"
            : "bg-gray-300"
        }`}
      >
        {sortButtons[1].label}
      </button>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
