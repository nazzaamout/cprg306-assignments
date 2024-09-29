import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <main className="container mx-auto p-2 bg-gray-800">
      <span className="text-lg font-semibold">{name}</span>
      <br />
      <span className="text-xs text-gray-300">
        Buy {quantity} in {category}
      </span>
    </main>
  );
};

export default Item;
