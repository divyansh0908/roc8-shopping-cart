import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/cart.slice";
import { updateCart, removeFromCart } from "../Store/cart.action";
import {Button} from "react-bootstrap";

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
        
        const item = items.find((item) => item.product._id === (product.id?product.id:product._id));
        
        if (item) {
        setCount(item.quantity);
        }
    }, [items, product.id]);


    return (
        <div className="counterStrip" >
        <Button className="btn" variant="primary" onClick={handleDecrement} disabled={count===1}>-</Button>
        <strong>{count}</strong>
        <Button className="btn" variant="primary" onClick={handleIncrement}>+</Button>

        <Button onClick={() => dispatch(removeFromCart(items.find((item) => item.product._id === (product.id?product.id:product._id))))}>
            Remove
        </Button>
        </div>
    );
    }

export default CounterStrip;