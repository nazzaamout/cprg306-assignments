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
          type="text"
          id="name"
          className="w-full px-10 py-2 rounded-md border border-gray-300 text-black"
          //     !isFocused &&
          //     name === "" && (
          //       <span className="absolute top-1/2 transform translate-y-1/2 left-4 text-grey-400">
          //         Item name
          //       </span>
          //     )
          //   }`}
        />
      </div>
      <div className="mb-4 flex justify-between items-center">
        <input
          required
          onChange={handleQuantityChange}
          onClick={handleQuantityChange}
          value={quantity}
          type="number"
          id="quantity"
          min="1"
          max="20"
          className="w-auto px-3 py-2 border border-gray-300 rounded-md text-black"
        />
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
