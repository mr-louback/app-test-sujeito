import { Link } from 'react-router-dom';
import FetchApi from '../../components/FetchApi';
function Api() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contato">Contato</Link>
      <br/>
      <FetchApi />
    </div>
  )

}
export default Api;