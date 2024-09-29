"use client";

import React, { useState } from "react";

function NewItem() {
  const [name, setName] = useState("Item name");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

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

  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert("Submitted item: " + JSON.stringify(item));

    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded text-gray-400"
        />
      </div>

      <div className="mb-4 flex justify-between items-center">
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="20"
          className="w-full px-3 py-2 border rounded text-black"
        />
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
        >
          <option value="produce">Produce</option>
          <option value="" className="text-gray-500">
            Category
          </option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </form>
  );
}

export default NewItem;
