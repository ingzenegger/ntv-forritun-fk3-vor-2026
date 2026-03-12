import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStyles from "./app.css?url";
import { useState, createContext, Dispatch, SetStateAction } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export function meta() {
  return [
    { title: "Remix Theme App" },
    {
      name: "description",
      content: "Simple Remix app with light and dark theme",
    },
  ];
}
type ThemeContextType = {
  theme: string;
  setThemeState: Dispatch<SetStateAction<string>>;
};
export const ThemeContext = createContext<ThemeContextType>('light');

export default function App() {
  const [theme, setThemeState] = useState<string>("light");
  // const value = { theme, setThemeState };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeContext.Provider value={{ theme, setThemeState }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
