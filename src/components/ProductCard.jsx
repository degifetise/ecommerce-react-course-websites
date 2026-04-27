import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
/* const productQauntityLabel = productInCart ? `({})` */
  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          className="product-card-image"
          alt={product.name}
        />
        <div className="product-card-overlay">
          <Link to={`/products/${product.id} `} className="overlay-btn">
            Quick View
          </Link>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-primary" to={`/products/${product.id}>`}>
            View Details
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart. {productInCart ? `(${productInCart.quantity})` : []}
          </button>
        </div>
      </div>
    </div>
  );
}
