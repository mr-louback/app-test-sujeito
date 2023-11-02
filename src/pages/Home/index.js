import Nome from "../../components/Nome.js";
import NomeEstruturado from "../../components/NomeEstruturado";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NomeEstruturado name='Maria' idade={35} />
      <Nome idade={25} />
    </div>
  )
}
export default Home;