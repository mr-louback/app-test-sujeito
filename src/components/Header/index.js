import { Link } from "react-router-dom";
import './style.css';
function Header() {
  return <header>
    <h1>SujeitoDev</h1>
    <div>
      <Link to="/contato">Contato</Link>
      <Link to="/api">Api</Link> 
      <Link to="/">Home</Link>
    </div>
  </header>
}
export default Header;