import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section>
      <ul className="p-5 m-5 font-sans bg-gray-700 shadow-lg">
        <li
          className="font-bold text-2xl text-rose-400"
          onClick={() => onSelect(name)}
        >
          {name}
        </li>
        <li className="text-sm text-gray-200">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
