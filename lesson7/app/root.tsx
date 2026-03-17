import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStyles from "./app.css?url";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  ReactNode,
} from "react";

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

type State = {
  count: number;
};
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET"; payload: number };

const initialCount: State = { count: 0 };

function countReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: action.payload };
    default:
      return state;
  }
}
export type CountContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
export const CountContext = createContext<CountContextType | undefined>(
  undefined,
);

export type Theme = "light" | "dark" | string;
type ThemeContextType = {
  theme: Theme;
  setThemeState: Dispatch<SetStateAction<Theme>>;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setThemeState: () => {},
});

export default function App() {
  const [state, dispatch] = useReducer(countReducer, initialCount);
  const [theme, setThemeState] = useState<string>("light");

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CountContext.Provider value={{ state, dispatch }}>
          <ThemeContext.Provider value={{ theme, setThemeState }}>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </ThemeContext.Provider>
        </CountContext.Provider>
      </body>
    </html>
  );
}
