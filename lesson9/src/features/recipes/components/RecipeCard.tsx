import { Card } from "@/shared/components/ui/card";
import useRecipe from "../API/recipeAPI";
import RecipeButton from "./RecipeButton";

export default function RecipeCard() {
  const { recipe, loading } = useRecipe("random.php");

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <Card>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} />
      <RecipeButton />
    </Card>
  );
}
