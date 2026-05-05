import { useState } from "react";
import "./App.css";
import { Layout } from "@/components/Layout";
import { AboutPage } from "@/pages/AboutPage";
import { HomePage } from "@/pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import UserHomePage from "./pages/UserHomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function ProtectedRoute({ children }) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/UserHomePage"
            element={
              <ProtectedRoute>
                <UserHomePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
