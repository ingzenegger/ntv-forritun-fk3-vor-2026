import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();
  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="text-foreground text-sm font-semibold tracking-tight">
            Lesson 16
          </p>
          <nav className="flex flex-wrap gap-2" aria-label="Main navigation">
            <button
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors bg-primary text-primary-foreground"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors bg-primary text-primary-foreground"
              onClick={() => navigate("about")}
            >
              About
            </button>
            <button
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors bg-primary text-primary-foreground"
              onClick={() => navigate("login")}
            >
              Login
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
