import "./Card.css";
import pic from "./shoe.png";

const Card = ({ id, name, price, bgColor, inWishList, setProducts }) => {
  const toggleWishList = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, inWishList: !product.inWishList };
        } else {
          return product;
        }
      });
    });
  };

  return (
    <>
      <div className="card">
        <div className={`product-card ${bgColor}`}>
          <div className="badge" onClick={() => toggleWishList(id)}>
            {inWishList && <i className="fas fa-heart wishlist-heart"></i>}

            {!inWishList && (
              <i
                className="fa fa-heart-o wishlist-heart"
                aria-hidden="true"
              ></i>
            )}
          </div>
          <img className="card-image" src={pic} alt={`${name}`} />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <h4>{price}</h4>

          <div>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
