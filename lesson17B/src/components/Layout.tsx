import { Button } from "@/components/ui/button";
// import { useAuth } from "@/contexts/auth-context";
import { ROUTES } from "@/navigation";
import { Show, SignOutButton, useAuth } from "@clerk/react";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  //TODO setja inn clerk log out
  // const { isAuthenticated, logout } = useAuth();
const { isSignedIn, isLoaded } = useAuth();
  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="text-foreground text-sm font-semibold tracking-tight">
            Lesson 16
          </p>
          <nav
            className="flex flex-wrap items-center gap-2"
            aria-label="Main navigation"
          >
            <Button variant="ghost" size="sm" asChild>
              <Link to={ROUTES.home}>Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to={ROUTES.about}>About</Link>
            </Button>
            <Show when={"signed-in"}>
              <Button variant="ghost" size="sm" asChild>
                <Link to={ROUTES.dashboard}>Dashboard</Link>
              </Button>
              <SignOutButton />
              {/* <Button variant="ghost" size="sm" type="button" onClick={() => logout()}>
                Log out
              </Button> */}
            </Show>

            <Show when={"signed-out"}>
              <Button variant="ghost" size="sm" asChild>
                <Link to={ROUTES.login}>Log in</Link>
              </Button>
            </Show>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
