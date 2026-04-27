import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
export default function ProductDetails() {
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/");
    }
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="page">
      <h2 style={{ textAlign: "center" }}>Products details</h2>
      <h3 style={{ textAlign: "center" }}>Details of {product.name}</h3>
      <div className="container">
        <div className="product-details">
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
            />
          </div>
          <div className="product-detail-content">
            <h3 className="product-card-name">
              <span>Name</span> {product.name}
            </h3>
            <p className="product-card-price">
              <span>Price</span> ${product.price}
            </p>

            <div className="add-to-cart-btn">
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart.{" "}
                {productInCart ? `(${productInCart.quantity})` : []}
              </button>
            </div>
            <div className="details-text">
              <p>{product.details} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
