import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function RoutesProj() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>

  )
}
export default RoutesProj;