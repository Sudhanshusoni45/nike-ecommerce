import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components";
import { getSingleProduct } from "../../utils";
import { useEffect } from "react";
import "./SingleProductPage.css";
import { useCart } from "../../Context/cart-context";

const SingleProductPage = () => {
  const [product, setProduct] = useState();
  const { addToCart } = useCart();
  const { productId } = useParams();
  useEffect(() => getSingleProduct({ productId, setProduct }), []);
  console.log(product);
  return (
    <>
      <Navbar />

      {product ? (
        <div className="single_product_page_container">
          <div>
            {
              <img
                src={product.image}
                alt=""
                className="single_product_image"
              />
            }
            {
              <img
                src={product.image}
                alt=""
                className="single_product_image"
              />
            }
          </div>
          <div className="single_product_details">
            <h2>{product.name}</h2>
            <span>{product.categoryName}</span>
            <span>${product.price}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quae optio quos, rerum unde nam sit dignissimos voluptatum,
              eveniet sint quam eum cumque, earum animi expedita ad possimus
              pariatur culpa.
            </p>
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export { SingleProductPage };
