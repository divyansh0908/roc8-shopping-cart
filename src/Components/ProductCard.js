import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CounterStrip from "./Counter";
import { baseURL } from "../utils/baseURL";


// import product slice

const ProductCard = (props) => {
  const { product, handleAdd } = props;
  const { name, image, unitPrice, quantity } = product;
  const cart = useSelector((state) => state.cart);
  const { items } = cart;
  const count = items.find((item) => item?.product?._id === product.id);
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  

  return (
    <div className="mx-4 card w-full md:w-1/3 lg:w-1/4" >
      <img src={baseURL + `${image}`} alt="" className="w-full"/>
      <h4>{product.name}</h4>
      <strong>
       Price: {unitPrice} Rs.
      
      </strong>
      <h5>
      Quantity: {quantity} pcs
      </h5>
      <button className="bg-blue-500 rounded-md px-4 my-2 py-2" onClick={navigateToProduct} >
        View
      </button>
      {!count ? (
        <button onClick={() => handleAdd(product)} className="bg-blue-500 rounded-md px-4 py-2">
          Add to cart
        </button>
      ) : (
        <CounterStrip product={product} />
      )}
    </div>
  );
};

export default ProductCard;