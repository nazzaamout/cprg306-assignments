"use client";
import React, { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealsData = await fetchMealIdeas(ingredient);
      setMeals(mealsData);
    };

    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-blue-950 p-5 rounded-xl text-gray-400">
      <header className="flex justify-center items-center font-semibold mb-4">
        <h1 className="text-3xl font-bold mb-5 text-rose-400">Meal Ideas</h1>
      </header>
      {ingredient ? (
        meals.length > 0 ? (
          <p className="text-lg font-semibold mb-5 text-gray-200">
            Here are some meal ideas with {ingredient}:
          </p>
        ) : (
          <p className="text-lg font-semibold mb-5 text-gray-200">
            Sorry, no meal ideas found for {ingredient}.
          </p>
        )
      ) : (
        <p className="text-lg font-semibold mb-5 text-gray-200">
          Please select an item from the list.
        </p>
      )}
      <ul>
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="text-rose-400 bg-gray-700 p-3 rounded mb-2"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const { meals } = await response.json();
  return meals || [];
};

/**
 * import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {

    const result = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
    const data = await response.json()
    return data.meals || []
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        setMeals(await fetchMealIdeas(ingredient))
    }

    useEffect(() => {
        ingredient && ingredient.length > 0 && loadMealIdeas()
    }, [ingredient])

    const NoMeal = () => ingredient === "" ? <p>Please pick an ingredient to see the meal ideas</p> : <p>No meal ideas found for {ingredient}</p>

    return meals.length > 0 ? (
        <div>
            <header><h2 className='font-bold text-2xl'>Here are some ideas using {ingredient}</h2></header>
            <ul className='mt-5'>
                {meals.map(meal => (
                    <li key={meal.strMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    ) : <NoMeal />
}
 */
