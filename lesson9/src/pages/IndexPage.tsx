import BookCard from "@/features/books/components/BookCard";
import RecipeCard from "@/features/recipes/components/RecipeCard";

export function IndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 9</h1>
      <RecipeCard />
      <BookCard />
    </main>
  );
}
