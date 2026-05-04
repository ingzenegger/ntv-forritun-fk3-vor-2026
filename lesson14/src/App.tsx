import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "@/components/Layout";
import { IndexPage } from "./pages/IndexPage";
import InboxScreen from "./components/InboxScreen";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { MemberWelcomePage } from "./pages/MemberWelcomePage";
import { LoginPage } from "./pages/LoginPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="velkominn"
          element={
            <ProtectedRoute>
              <MemberWelcomePage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/storyBookTasks" element={<InboxScreen />} />
    </Routes>
  );
}

export default App;
