import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CounterStrip from "./Counter";

// import product slice

const ProductCard = (props) => {
  const { product, handleAdd } = props;
  const { name, image, unitPrice, quantity } = product;
  const cart = useSelector((state) => state.cart);
  const { items } = cart;
  const count = items.find((item) => item.product._id === product.id);

  const baseURL = "http://localhost:5000";

  return (
    <div className="card" key={product.id}>
      <img src={baseURL + `/${product.image}`} alt="" />
      <h4>{product.name}</h4>
      <strong>
       Price: {product.unitPrice} Rs.
      
      </strong>
      <h5>
      Quantity: {product.quantity} pcs
      </h5>
      {!count ? (
        <Button onClick={() => handleAdd(product)} className="btn">
          Add to cart
        </Button>
      ) : (
        <CounterStrip product={product} />
      )}
    </div>
  );
};

export default ProductCard;
