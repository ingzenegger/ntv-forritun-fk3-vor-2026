import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import useBooks from "../API/bookAPI";

export default function BookCard() {
  const { book, loading } = useBooks("16384516");

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>No book found.</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2>Author: {book.authors[0].name}</h2>
        <img src={book.image} />
        <p>{book.description}</p>
      </CardContent>
    </Card>
  );
}
