import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product</h1>
      <span>Product: id {id}</span>
    </div>
  )
}
export default Product