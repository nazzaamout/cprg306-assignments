"use client";

import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [error, setError] = useState(); // [1]
  const [isFocused, setIsFocused] = useState(false); // [2]

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      setError("Please fill out this field.");
      return;
    }

    const newItem = {
      name,
      quantity,
      category,
    };
    console.log(item);
    alert("Submitted item: " + JSON.stringify(item));

    setName("");
    setQuantity(1);
    setCategory("Produce");
    setError("");
  }

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNameChange = (item) => {
    setName(item.target.value);
  };

  const handleQuantityChange = (item) => {
    setQuantity(item.target.value);
  };

  const handleCategoryChange = (item) => {
    setCategory(item.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <div>
        <input
          required
          onChange={handleNameChange}
          onClick={handleNameChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={name}
          placeholder="Item name"
          type="text"
          id="name"
          className="w-full px-10 py-2 rounded-md border border-gray-300 text-black"
        />{" "}
      </div>
      <div className="flex flex-row">
        <div class="bg-gradient-to-tr from-white to-slate-200 flex flex-row gap-6 rounded-xl m-5 w-40 h-15 items-center justify-center">
          <p class="text-black font-sans font-semibold ml-3">{quantity}</p>
          <div class="flex gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity == 1}
              class="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity == 20}
              class="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
            >
              +
            </button>
          </div>
        </div>

        <select
          required
          onChange={handleCategoryChange}
          onClick={handleCategoryChange}
          value={category}
          className="w-auto px-3 py-2 border border-gray-300 rounded-md text-black"
        >
          <option value="Produce">Produce</option>
          <option value="" disabled>
            Category
          </option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Bakery">Bakery</option>
          <option value="Frozen">Frozen</option>
          <option value="Canned">Canned</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        +{" "}
      </button>
    </form>
  );
}
