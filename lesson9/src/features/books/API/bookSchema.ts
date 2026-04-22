import * as z from "zod";

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.httpUrl(),
  identifiers: z.object({
    isbn_10: z.string().max(10),
  }),
  authors: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  description: z.string(),
});

export type BookType = {
  id: string;
  title: string;
  image: string;
  name: string;
  authors: Authors[];
  description: string;
};

type Authors = {
  id: number;
  name: string;
};
