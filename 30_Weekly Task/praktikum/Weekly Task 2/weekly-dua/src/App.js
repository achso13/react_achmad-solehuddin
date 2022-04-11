import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task/:taskSlug" element={<TaskPage />} />
        <Route path="*" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
