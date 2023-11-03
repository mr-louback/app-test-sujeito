import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Error from "./pages/Error";
import Product from "./pages/Product";

function RoutesProj() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}
export default RoutesProj;