import { Link } from "react-router-dom";
import Nome from "../../components/Nome.js";
import NomeEstruturado from "../../components/NomeEstruturado";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  let url = `/product/${id || 123}`
  return (
    <div>
      <h1>Home</h1>
      <NomeEstruturado name='Maria' idade={35} />
      <hr />
      <Link to={url}>Produto</Link>
      <Nome idade={25} />
    </div>
  )
}
export default Home;