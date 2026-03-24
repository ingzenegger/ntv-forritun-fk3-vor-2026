import { useEffect, useState } from "react";
import { BookSchema, type BookType } from "./bookSchema";

const BASE_URL = "https://api.bigbookapi.com/";
// const API_KEY = ;

export default function useBooks(path: string) {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<BookType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}${path}${import.meta.env.VITE_API_KEY}`,
        );

        const data = await response.json();
        BookSchema.parse(data);
        setBook(data);
        // return data;
      } catch {
        console.error("villa");
        return null;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [path]);
  return { book, loading };
}
