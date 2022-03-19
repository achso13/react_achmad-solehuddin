import "./App.css";
import Home from "./pages/Home/Home";
import AboutAuthor from "./pages/About/AboutAuthor";
import AboutApp from "./pages/About/AboutApp";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-app" element={<AboutApp />} />
        <Route path="/about/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
