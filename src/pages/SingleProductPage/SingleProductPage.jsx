import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components";
import { addToCartHandler, getSingleProduct } from "../../utils";
import { useEffect } from "react";
import "./SingleProductPage.css";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";

const SingleProductPage = () => {
  const [product, setProduct] = useState();
  const { cartState, cartDispatch } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { productId } = useParams();
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    getSingleProduct({ productId, setProduct });
  }, []);

  useEffect(() => checkProductInCart());

  const checkProductInCart = () => {
    const inCart = cartState.some(({ _id }) => productId === _id);
    setIsProductInCart((prevState) => inCart);
  };
  return (
    <>
      <Navbar />

      {product ? (
        <div className="single_product_page_container">
          <div>
            {
              <img
                src={product.productImage}
                alt=""
                className="single_product_image"
              />
            }
            {
              <img
                src={product.productImage}
                alt=""
                className="single_product_image"
              />
            }
          </div>
          <div className="single_product_details">
            <h2>{product.name}</h2>
            <span>{product.categoryName}</span>
            <span>${product.price}</span>
            <p>{product.description}</p>
            {isProductInCart ? (
              <Link to="/cart">
                <button className="btn width-100-percent">Go to Cart</button>
              </Link>
            ) : (
              <button
                className="btn bg-purple"
                onClick={() => addToCartHandler(product, cartDispatch, token)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export { SingleProductPage };
