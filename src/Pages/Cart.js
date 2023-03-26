import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterStrip from "../Components/Counter";
import { fetchCartData } from "../Store/cart.action";
import { baseURL } from "../utils/baseURL";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { items } = cart;

  useEffect(() => {
    
    dispatch(fetchCartData());
  }, []);

  

  return (
    <div>
      <h1>Cart</h1>
      <div className="cartWrapper">
        {items.map((item) => {
          console.log(item);
          return (
            <div key={item.product._id} className="cartCard">
              <div className="left">
                <img src={baseURL + `${item.product.image}`} alt="" />
              </div>
              <div className="right">
                <h5>{item.product.name}</h5>
                <div>
                <strong>Price: {item.product.unitPrice} Rs.</strong></div>
                <div>
                <strong>Quantity:</strong><sub>(Per Pack)</sub> {item.product.quantity} </div>
                
                

                <div className="cartItemQuantity">
                  Nos: {item.quantity}
                </div>
              </div>
              <div >
                
                <CounterStrip product={item.product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
