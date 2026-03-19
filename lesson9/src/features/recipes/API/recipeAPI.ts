import { useEffect, useState } from "react";
import { MealSchema, type Meal } from "./recipeSchema";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

//Fetch the recipe specifed by URL (meal ID)
export default function useRecipe(path: string) {
  const [recipe, setRecipe] = useState<Meal>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipeResponse = await fetch(`${BASE_URL}${path}`);

        const data = await recipeResponse.json();
        MealSchema.parse(data.meals[0]);

        setRecipe(data.meals[0]);
      } catch {
        console.error("villa");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [path]);
  return { recipe, loading };
}
