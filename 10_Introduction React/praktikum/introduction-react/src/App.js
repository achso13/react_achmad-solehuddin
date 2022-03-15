// import "./App.css";
import "./asset/css/bootstrap.min.css";
import "./asset/css/main.css";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
