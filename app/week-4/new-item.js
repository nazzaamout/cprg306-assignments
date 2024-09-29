"use client";

import React, { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div className="flex items-center space-x-4 justify-center">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-gray-600 px-4 py-2 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        +
      </button>
    </div>
  );
}

export default NewItem;
