import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Error from "./pages/Error";

function RoutesProj() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}
export default RoutesProj;