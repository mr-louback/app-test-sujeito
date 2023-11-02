import Nome from "../../components/Nome.js";
import NomeEstruturado from "../../components/NomeEstruturado";
import Forms from "../../components/Forms";
import List from "../../components/List";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/contato">Contato</Link>
      <br/>
      <Link to="/api">Api</Link>
      <Nome idade={25} />
      <NomeEstruturado name='Maria' idade={35} />
      <Forms />
      <List />
    </div>
  )
}
export default Home;