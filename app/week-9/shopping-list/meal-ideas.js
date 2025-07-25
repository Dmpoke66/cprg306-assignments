"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMealIdeas(ingredient) {
    console.log(ingredient);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          setMeals(data.meals);
          setLoading(false);
        })
      // const response = await fetch(url);
      // console.log(response.ok)
      // if(!response.ok){
      //   console.log(response.status)
      //   setLoading(false);
      //   return [];
      // }
      // const data = await response.json();
      // console.log("Json data" + JSON.stringify(data.meals))
      // setMeals(data.meals);
      // setLoading(false);
      // return [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setLoading(false);
      return;
    }
  }

  async function loadMealIdeas() {
    fetchMealIdeas(ingredient);
    console.log("Meal Data:" + JSON.stringify(meals))
    console.log("One meal:" + (meals.strMeal))
  }

  useEffect(() => {
    if (!ingredient) return;
    loadMealIdeas();
  }, [ingredient]);

  if (loading) return <p>Loading users...</p>

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        Meal Ideas for "{ingredient}
      </h2>
    
      <ul className="list-disc list-inside">
        {!meals || meals.length == 0 ? (
          <li>No meal ideas found.</li>
        ) : (
          // <li key={meals.idMeal}>{meals.strMeal}</li>
          meals.map(meals => (
            <li key={meals.idMeal}>{(meals.strMeal)}</li>
            
          ))
        )}
      </ul> 
    </div>
  );
}
