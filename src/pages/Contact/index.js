import { Link } from "react-router-dom";

function Contact() {
  return <div>
    <h1>Contato</h1>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/api">Api</Link>
  </div>
  
}
export default Contact;