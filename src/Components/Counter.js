import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/cart.slice";
import { updateCart, removeFromCart } from "../Store/cart.action";
import {button} from "react-bootstrap";

const CounterStrip = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { items } = cart;
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
        let toSend = {};
        toSend.productId = (product.id?product.id:product._id);
        toSend.count = count + 1;
        dispatch(updateCart(toSend));
    };
    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        let toSend = {};
        toSend.productId = (product.id?product.id:product._id);
        toSend.count = count - 1;
        dispatch(updateCart(toSend));
        }
    };
    useEffect(() => {
        
        const item = items.find((item) => item.product?._id === (product.id?product.id:product?._id));
        
        if (item) {
        setCount(item.quantity);
        }
    }, [items, product.id]);


    return (
        <div className="flex flex-row justify-between my-4" >
        <button className="bg-blue-500 rounded-md  p-2"  onClick={handleDecrement} disabled={count===1}>-</button>
        <strong className="my-auto mx-2">{count}</strong>
        <button className="bg-blue-500 rounded-md p-2" variant="primary" onClick={handleIncrement}>+</button>

        <button className="bg-blue-500 rounded-md px-1 py-2 mx-2 " onClick={() => dispatch(removeFromCart(items.find((item) => item.product?._id === (product.id?product.id:product._id))))}>
            Remove
        </button>
        </div>
    );
    }

export default CounterStrip;