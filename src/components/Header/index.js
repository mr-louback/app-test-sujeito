import { Link } from "react-router-dom";

function Header() {
  return <div>
    <h1>Header</h1>
    <div>
      <Link to="/contato">Contato</Link>
      <br />
      <Link to="/api">Api</Link> 
      <br />
      <Link to="/">Home</Link>
    </div>
  </div>
}
export default Header;