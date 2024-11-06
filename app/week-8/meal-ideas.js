"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealsData = await fetchMealIdeas(ingredient);
      setMeals(mealsData);
    };

    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  //   const loadMealIdeas = async () => {
  //     const meals = await fetchMealIdeas(ingredient);
  //     setMeals(meals);
  //   };

  //   useEffect(() => {
  //     loadMealIdeas();
  //   }, [ingredient]);

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
