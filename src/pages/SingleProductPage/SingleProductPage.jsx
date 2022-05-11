import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { productId } = useParams();
  return <>Single</>;
};

export { SingleProductPage };
