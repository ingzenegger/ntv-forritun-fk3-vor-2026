import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "@/components/Layout";
import { IndexPage } from "./pages/IndexPage";
import InboxScreen from "./components/InboxScreen";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="/storyBookTasks" element={<InboxScreen />} />
    </Routes>
  );
}

export default App;
