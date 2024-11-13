import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="p-5 bg-blue-950 rounded-md text-gray-200">
      <div className="flex flex-row gap-4 justify-center text-lg font-sans font-semibold">
        <p>Sort by:</p>

        <button
          onClick={() => {
            setSortBy("name");
          }}
          style={{
            backgroundColor: sortBy === "name" ? "#F87171" : "#374151",
            color: sortBy === "name" ? "#065F46" : "#E5E7EB",
          }}
          className="bg-cyan-950 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Name
        </button>

        <button
          onClick={() => {
            setSortBy("category");
          }}
          style={{
            backgroundColor: sortBy === "category" ? "#F87171" : "#374151",
            color: sortBy === "category" ? "#065F46" : "#E5E7EB",
          }}
          className="bg-cyan-950 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={(item) => onItemSelect(item)}
        />
      ))}
    </main>
  );
}
