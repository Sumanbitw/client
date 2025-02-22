import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hotel" element={<Home />} />
      <Route path="/hotel/:id" element={<Home />} />
      <Route path="/contacts" element={<Home />} />
    </Routes>
  );
}

export default App;
